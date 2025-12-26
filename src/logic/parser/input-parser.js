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
        return "Invalid instruction! The instruction entered might not be supported or has an invalid format!";
    }

    const expectedOperands = INSTRUCTIONS[mnemonic].operands;

    if (operands.length !== expectedOperands.length) {
        return "Invalid number of operands!";
    }

    // make operands lowercase to check without case-sensitivity
    for (let i = 0; i < operands.length; i++) {
        const operand = operands[i].toLowerCase();
        const operandType = expectedOperands[i];

        if (!isValidOperand(operand, operandType)) {
            return `Invalid operand ${operand} for ${mnemonic}`;
        }
    }

    // instruction is valid -> simulate the instruction
    return "INSTRUCTION IS VALID!";
}

function isValidMnemonic(mnemonic) {
    return mnemonic in INSTRUCTIONS;
}

function isValidRegister(register) {
    return register in REGISTERS;
}

function isValidSignedImmediate(immediate) {
    const value = Number(immediate);
    if (!Number.isInteger(value)) {
        return false;
    }

    return (value >= MIN_SIGNED_16BIT_INT && value <= MAX_SIGNED_16BIT_INT);
}

function isValidUnsignedImmediate(immediate) {
    const value = Number(immediate);
    if (!Number.isInteger(value)) {
        return false;
    }

    return (value >= MIN_UNSIGNED_16BIT && value <= MAX_UNSIGNED_16BIT);
}

function isValidLabel(label) {
    const labelRegex = /^[A-Za-z_][A-Za-z0-9_]*$/;
    return !isValidRegister(label) && !isValidMnemonic && labelRegex.test(label);
}

/**
 * * Checks if a user's input operand matches the operand type based on registers.js
 * @param {*} operand is the user's input operand
 * @param {*} operandType operand type based on registers.js
 */
function isValidOperand(operand, operandType) {
    switch(operandType) {
        // registers
        case "r":
            return isValidRegister(operand);
        // signed integer
        case "si":
            return isValidSignedImmediate(operand);
        // unsigned integer
        case "ui":
            return isValidUnsignedImmediate(operand);
        // instruction label
        case "l":
            return isValidLabel(operand);
        default:
            return false;
    }
}
