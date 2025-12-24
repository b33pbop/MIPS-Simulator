// input format: mnemonics + operands [rs, rt, rd]
import { INSTRUCTIONS } from "../data/mips_data/instruction-type";
import { REGISTERS } from "../data/mips_data/Register";

/**
 * Parses a single MIPS instruction into tokens
 * 
 * @param {string} input - Raw instruction string
 * @returns {string[]} Tokenized instruction
 */
export function parseInstruction(input) {
    // remove all commas, trailing/leading whitespace and split if theres 1 or more whitespaces
    return input.replace(/,/g, "").trim().split(/\s+/);
}