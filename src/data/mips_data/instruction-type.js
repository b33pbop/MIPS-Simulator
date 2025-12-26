// Currently only commonly used instructions are supported
// There are 3 types of formats: R, I, J
// There are 5 types of operands:
// 1. register -> r
// 2. signed immediate -> si
// 3. unsigned immediate -> ui
// 4. instruction address label -> l
// 5. memory address for load/store instructions, offset(register) format -> si(r)
export const INSTRUCTIONS = {
    add: {
        format: "R",
        operands: ["r", "r", "r"] // e.g. rd rs rt 
    },
    addi: {
        format: "I",
        operands: ["r", "r", "si"]
    },
    and: {
        format: "R",
        operands: ["r", "r", "r"]
    },
    andi: {
        format: "I",
        operands: ["r", "r", "ui"]
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
        operands: ["r", "r", "ui"]
    },
    lw: {
        format: "I",
        operands: ["r", "si(r)"]
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
        operands: ["r", "r", "ui"]
    },
    slt: {
        format: "R",
        operands: ["r", "r", "r"]
    },
    slti: {
        format: "I",
        operands: ["r", "r", "si"]
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
        operands: ["r", "si(r)"]
    },
    sub: {
        format: "R",
        operands: ["r", "r", "r"]
    },
}