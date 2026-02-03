import { useState, useEffect } from 'react';
import '../styles/instruction-encoding.css';

/**
 * MIPS Register name to number mapping
 */
const REGISTER_MAP = {
    '$zero': 0, '$0': 0,
    '$at': 1, '$1': 1,
    '$v0': 2, '$v1': 3, '$2': 2, '$3': 3,
    '$a0': 4, '$a1': 5, '$a2': 6, '$a3': 7,
    '$4': 4, '$5': 5, '$6': 6, '$7': 7,
    '$t0': 8, '$t1': 9, '$t2': 10, '$t3': 11, '$t4': 12, '$t5': 13, '$t6': 14, '$t7': 15,
    '$8': 8, '$9': 9, '$10': 10, '$11': 11, '$12': 12, '$13': 13, '$14': 14, '$15': 15,
    '$s0': 16, '$s1': 17, '$s2': 18, '$s3': 19, '$s4': 20, '$s5': 21, '$s6': 22, '$s7': 23,
    '$16': 16, '$17': 17, '$18': 18, '$19': 19, '$20': 20, '$21': 21, '$22': 22, '$23': 23,
    '$t8': 24, '$t9': 25,
    '$24': 24, '$25': 25,
    '$k0': 26, '$k1': 27,
    '$26': 26, '$27': 27,
    '$gp': 28, '$28': 28,
    '$sp': 29, '$29': 29,
    '$fp': 30, '$30': 30,
    '$ra': 31, '$31': 31,
};

/**
 * MIPS Opcode and function codes
 */
const OPCODES = {
    // R-type (opcode = 0)
    'add': { opcode: 0, funct: 0x20, type: 'R' },
    'sub': { opcode: 0, funct: 0x22, type: 'R' },
    'and': { opcode: 0, funct: 0x24, type: 'R' },
    'or': { opcode: 0, funct: 0x25, type: 'R' },
    'slt': { opcode: 0, funct: 0x2a, type: 'R' },
    // I-type
    'lw': { opcode: 0x23, type: 'I' },
    'sw': { opcode: 0x2b, type: 'I' },
    'beq': { opcode: 0x04, type: 'I' },
    'bne': { opcode: 0x05, type: 'I' },
    'addi': { opcode: 0x08, type: 'I' },
    'andi': { opcode: 0x0c, type: 'I' },
    'ori': { opcode: 0x0d, type: 'I' },
    // J-type
    'j': { opcode: 0x02, type: 'J' },
    'jal': { opcode: 0x03, type: 'J' },
};

function toBinary(num, bits) {
    if (num < 0) {
        // Two's complement for negative numbers
        return (num >>> 0).toString(2).slice(-bits);
    }
    return num.toString(2).padStart(bits, '0');
}

function toHex(binaryStr) {
    const num = parseInt(binaryStr, 2);
    return '0x' + num.toString(16).padStart(8, '0').toUpperCase();
}

function parseRegister(reg) {
    if (!reg) return 0;
    const cleaned = reg.replace(',', '').trim();
    const mapped = REGISTER_MAP[cleaned];
    if (mapped !== undefined) return mapped;
    const parsed = parseInt(cleaned.replace('$', ''));
    return isNaN(parsed) ? 0 : parsed;
}

function parseInstruction(instruction) {
    if (!instruction || instruction.trim() === '') return null;
    
    try {
        const parts = instruction.trim().split(/[\s,()]+/).filter(p => p);
        const op = parts[0]?.toLowerCase();
        
        if (!op || !OPCODES[op]) return null;
        
        const info = OPCODES[op];
        let encoding = {};
        
        // J-type only needs 2 parts (op + address)
        if (info.type === 'J') {
            if (parts.length < 2) return null;
        } else if (info.type === 'I' && (op === 'lw' || op === 'sw')) {
            // lw/sw need at least 3 parts: op rt, offset(rs)
            if (parts.length < 3) return null;
        } else {
            // R-type and other I-type need 4 parts
            if (parts.length < 4) return null;
        }
        
        if (info.type === 'R') {
            // R-type: op rd, rs, rt -> opcode(6) rs(5) rt(5) rd(5) shamt(5) funct(6)
            const rd = parseRegister(parts[1]);
            const rs = parseRegister(parts[2]);
            const rt = parseRegister(parts[3]);
        
        encoding = {
            type: 'R',
            fields: {
                opcode: { value: info.opcode, bits: 6, label: 'opcode' },
                rs: { value: rs, bits: 5, label: 'rs' },
                rt: { value: rt, bits: 5, label: 'rt' },
                rd: { value: rd, bits: 5, label: 'rd' },
                shamt: { value: 0, bits: 5, label: 'shamt' },
                funct: { value: info.funct, bits: 6, label: 'funct' },
            },
            description: `${op} $${rd}, $${rs}, $${rt}`
        };
    } else if (info.type === 'I') {
        // I-type formats:
        // lw/sw: op rt, offset(rs) -> opcode(6) rs(5) rt(5) imm(16)
        // beq/bne: op rs, rt, offset -> opcode(6) rs(5) rt(5) imm(16)
        // addi: op rt, rs, imm -> opcode(6) rs(5) rt(5) imm(16)
        
        let rs, rt, imm;
        
        if (op === 'lw' || op === 'sw') {
            rt = parseRegister(parts[1]);
            imm = parseInt(parts[2]) || 0;
            rs = parseRegister(parts[3]);
        } else if (op === 'beq' || op === 'bne') {
            rs = parseRegister(parts[1]);
            rt = parseRegister(parts[2]);
            imm = parseInt(parts[3]) || 0;
        } else {
            // addi, andi, ori
            rt = parseRegister(parts[1]);
            rs = parseRegister(parts[2]);
            imm = parseInt(parts[3]) || 0;
        }
        
        encoding = {
            type: 'I',
            fields: {
                opcode: { value: info.opcode, bits: 6, label: 'opcode' },
                rs: { value: rs, bits: 5, label: 'rs' },
                rt: { value: rt, bits: 5, label: 'rt' },
                immediate: { value: imm, bits: 16, label: 'immediate' },
            },
            description: instruction
        };
    } else if (info.type === 'J') {
        // J-type: op address -> opcode(6) address(26)
        // The address is typically a label, we'll use 0 or parse if numeric
        const addressLabel = parts[1] || '0';
        const address = parseInt(addressLabel) || 0;
        
        encoding = {
            type: 'J',
            fields: {
                opcode: { value: info.opcode, bits: 6, label: 'opcode' },
                address: { value: address, bits: 26, label: 'address' },
            },
            description: `${op} ${addressLabel}`
        };
    }
    
    // Calculate binary and hex
    const fields = Object.values(encoding.fields);
    const binaryStr = fields.map(f => toBinary(f.value, f.bits)).join('');
    encoding.binary = binaryStr;
    encoding.hex = toHex(binaryStr);
    
    return encoding;
    } catch (e) {
        console.error('Error parsing instruction:', e);
        return null;
    }
}

export default function InstructionEncoding({ instruction }) {
    const [encoding, setEncoding] = useState(null);
    
    useEffect(() => {
        const parsed = parseInstruction(instruction);
        setEncoding(parsed);
    }, [instruction]);
    
    if (!encoding) {
        return (
            <div className="instruction-encoding">
                <h3>Instruction Encoding</h3>
                <p className="placeholder">Enter a valid instruction to see its encoding</p>
            </div>
        );
    }
    
    const fields = Object.entries(encoding.fields);
    
    return (
        <div className="instruction-encoding horizontal">
            <div className="encoding-header">
                <h3>Instruction Encoding</h3>
                <div className="encoding-type">
                    <span className="type-badge">{encoding.type}-Type</span>
                    <span className="instruction-text">{encoding.description}</span>
                </div>
            </div>
            
            <div className="encoding-body">
                {/* Visual bit layout */}
                <div className="bit-section">
                    <div className="bit-layout">
                        {fields.map(([name, field], index) => (
                            <div 
                                key={name}
                                className={`bit-field field-${name}`}
                                style={{ flex: field.bits }}
                            >
                                <div className="field-label">{field.label}</div>
                                <div className="field-value">{toBinary(field.value, field.bits)}</div>
                                <div className="field-decimal">({field.value})</div>
                            </div>
                        ))}
                    </div>
                    <div className="bit-positions">
                        <span>31</span>
                        <span style={{ marginLeft: 'auto' }}>0</span>
                    </div>
                </div>
                
                {/* Summary */}
                <div className="encoding-summary">
                    <div className="summary-row">
                        <span className="label">Binary:</span>
                        <code className="binary-value">
                            {encoding.binary.match(/.{1,4}/g)?.join(' ')}
                        </code>
                    </div>
                    <div className="summary-row">
                        <span className="label">Hex:</span>
                        <code className="hex-value">{encoding.hex}</code>
                    </div>
                </div>
            </div>
        </div>
    );
}
