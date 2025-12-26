/**
 * Tokenize a single MIPS instruction into tokens.
 * 
 * @param {string} input - Raw instruction string.
 * @returns {string[]} Tokenized instruction.
 */
export function tokenizeInstruction(input) {
    // remove all commas, trailing/leading whitespace and split if theres 1 or more whitespaces
    return input.replace(/,/g, "").trim().split(/\s+/);
}
