// There are 3 types of formats: R, I, J

// There are 9 types of paths:
// 1. R_ALU – R-type register–register ALU ops
// 2. R_SHIFT - R-type shift
// 3. I - I-type instructions
// 5. LOAD – lw
// 6. STORE – sw
// 7. BRANCH – beq, bne
// 8. JUMP – j
// 9. LUI – special immediate path (not a normal ALU op)

// There are 5 types of operands:
// 1. register -> r
// 2. signed immediate -> si
// 3. unsigned immediate -> ui
// 4. instruction address label -> l
// 5. memory address for load/store instructions, offset(register) format -> si(r)
export const INSTRUCTIONS = {
    add: {
        encoding: "R",
        path: "R_ALU",
        operands: ["r", "r", "r"]
    },
    sub: {
        encoding: "R",
        path: "R_ALU",
        operands: ["r", "r", "r"]
    },
    and: {
        encoding: "R",
        path: "R_ALU",
        operands: ["r", "r", "r"]
    },
    or: {
        encoding: "R",
        path: "R_ALU",
        operands: ["r", "r", "r"]
    },
    nor: {
        encoding: "R",
        path: "R_ALU",
        operands: ["r", "r", "r"]
    },
    slt: {
        encoding: "R",
        path: "R_ALU",
        operands: ["r", "r", "r"]
    },
    sll: {
        encoding: "R",
        path: "R_SHIFT",
        operands: ["r", "r", "i"]
    },
    srl: {
        encoding: "R",
        path: "R_SHIFT",
        operands: ["r", "r", "i"]
    },
    addi: {
        encoding: "I",
        path: "I",
        operands: ["r", "r", "si"]
    },
    slti: {
        encoding: "I",
        path: "I",
        operands: ["r", "r", "si"]
    },
    andi: {
        encoding: "I",
        path: "I",
        operands: ["r", "r", "ui"]
    },
    ori: {
        encoding: "I",
        path: "I",
        operands: ["r", "r", "ui"]
    },

    lui: {
        encoding: "I",
        path: "LUI",
        operands: ["r", "r", "ui"]
    },
    lw: {
        encoding: "I",
        path: "LOAD",
        operands: ["r", "si(r)"]
    },
    sw: {
        encoding: "I",
        path: "STORE",
        operands: ["r", "si(r)"]
    },
    beq: {
        encoding: "I",
        path: "BRANCH",
        operands: ["r", "r", "l"]
    },
    bne: {
        encoding: "I",
        path: "BRANCH",
        operands: ["r", "r", "l"]
    },
    j: {
        encoding: "J",
        path: "JUMP",
        operands: ["l"]
    }
};
