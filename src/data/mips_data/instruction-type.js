// Currently only commonly used instructions are supported
// There are 3 types of formats: R, I, J
// There are 4 types of operands:
// 1. register -> r
// 2. immediate -> i
// 3. instruction address label -> l
// 4. memory address for load/store instructions, offset(register) format -> i(r)
export const INSTRUCTIONS = {
    add: {
        format: "R",
        operands: ["r", "r", "r"] // e.g. rd rs rt 
    },
    addi: {
        format: "I",
        operands: ["r", "r", "i"]
    },
    and: {
        format: "R",
        operands: ["r", "r", "r"]
    },
    andi: {
        format: "I",
        operands: ["r", "r", "i"]
    },
    beq: {
        format: "I",
        operands: ["r", "r", "l"]
    },
    bne: {
        format: "I",
        operands: ["r", "r", "l"]
    },
    j: {
        format: "J",
        operands: ["l"]
    },
    lui: {
        format: "I",
        operands: ["r", "r", "i"]
    },
    lw: {
        format: "I",
        operands: ["r", "i(r)"]
    },
    nor: {
        format: "R",
        operands: ["r", "r", "r"]
    },
    or: {
        format: "R",
        operands: ["r", "r", "r"]
    },
    ori: {
        format: "I",
        operands: ["r", "r", "i"]
    },
    slt: {
        format: "R",
        operands: ["r", "r", "r"]
    },
    slti: {
        format: "I",
        operands: ["r", "r", "i"]
    },
    sll: {
        format: "R",
        operands: ["r", "r", "i"]
    },
    srl: {
        format: "R",
        operands: ["r", "r", "i"]
    },
    sw: {
        format: "I",
        operands: ["r", "i(r)"]
    },
    sub: {
        format: "R",
        operands: ["r", "r", "r"]
    },
}