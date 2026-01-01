// input format: mnemonics + operands [rs, rt, rd]
import { INSTRUCTIONS } from "../../data/mips_data/instruction-type";
import { REGISTERS } from "../../data/mips_data/Registers";

// immediate value range
const MAX_SIGNED_16BIT_INT = 32767;
const MIN_SIGNED_16BIT_INT = -32768;
const MAX_UNSIGNED_16BIT = 65535;
const MIN_UNSIGNED_16BIT = 0;

/**
 * Parse tokens to validate instruction.
 * 
 * @param {string[]} tokens - Tokenized instruction.
 */
export function parseInstruction(tokens) {
    const mnemonic = tokens[0];
    const operands = tokens.slice(1);
    if (!isValidMnemonic(mnemonic)) {
        return {
            "output": "Invalid instruction! The instruction entered might not be supported or has an invalid format!",
            "path": null,
        };
    }

    const expectedOperands = INSTRUCTIONS[mnemonic].operands;

    if (operands.length !== expectedOperands.length) {
        return {
            "output": "Invalid number of operands!",
            "path": null
        };
    }

    // make operands lowercase to check without case-sensitivity
    for (let i = 0; i < operands.length; i++) {
        const operand = operands[i].toLowerCase();
        const operandType = expectedOperands[i];

        if (!isValidOperand(operand, operandType)) {
            return {
                "output": `Invalid operand ${operand} for ${mnemonic}`,
                "type": null
            };
        }
    }

    // instruction is valid -> simulate the instruction
    return {
        "output": "INSTRUCTION IS VALID!",
        "path": INSTRUCTIONS[mnemonic].path,
    };
}

function isValidMnemonic(mnemonic) {
    return mnemonic in INSTRUCTIONS;
}

function isValidRegisterOperand(operand) {
    return operand in REGISTERS;
}

function isValidSignedImmediateOperand(operand) {
    const value = Number(operand);
    if (!Number.isInteger(value)) {
        return false;
    }

    return (value >= MIN_SIGNED_16BIT_INT && value <= MAX_SIGNED_16BIT_INT);
}

function isValidUnsignedImmediateOperand(operand) {
    const value = Number(operand);
    if (!Number.isInteger(value)) {
        return false;
    }

    return (value >= MIN_UNSIGNED_16BIT && value <= MAX_UNSIGNED_16BIT);
}

function isValidLabelOperand(operand) {
    const labelRegex = /^[A-Za-z_][A-Za-z0-9_]*$/;
    return !isValidRegisterOperand(operand) && !isValidMnemonic(operand) && labelRegex.test(operand);
}

function isValidOffsetRegisterOperand(operand) {
    // no spaces
    if (operand.trim().includes(" ")) {
        return false;
    }

    // must contain exactly 1 '('
    const operandParts = operand.split('('); // e.g. [0, $t1)]
    if (operandParts.length != 2) {
        return false;
    }

    const offsetStr = operandParts[0]; // e.g. 0
    const registerPart = operandParts[1]; // e.g. $t1)

    // immediate must be a signed integer
    if (!isValidSignedImmediateOperand(offsetStr)) {
        return false;
    }

    // must end with ')'
    if (!registerPart.endsWith(")")) {
        return false;
    }

    const register = registerPart.slice(0, -1);
    return isValidRegisterOperand(register);
}

/**
 * Checks if a user's input operand matches the operand type based on registers.js
 * @param {*} operand is the user's input operand.
 * @param {*} operandType operand type based on registers.js.
 */
function isValidOperand(operand, operandType) {
    switch(operandType) {
        // registers
        case "r":
            return isValidRegisterOperand(operand);
        // signed integer
        case "si":
            return isValidSignedImmediateOperand(operand);
        // unsigned integer
        case "ui":
            return isValidUnsignedImmediateOperand(operand);
        // instruction label
        case "l":
            return isValidLabelOperand(operand);
        case "si(r)":
            return isValidOffsetRegisterOperand(operand);
        default:
            return false;
    }
}
