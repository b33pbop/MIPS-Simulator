export const SW_INSTRUCTION_FLOW = {
    IF: {
        critical: [
            "instruction-memory",
            "imem-to-decoder",
            "decoder",
        ],
        nonCritical: [],
    },
    ID: {
        critical: [
            "rs-to-rr1",
            "rt-to-rr2",
            "registers",
        ],
        nonCritical: [
            "opcode-to-control",
            "control",

            "rt-to-regdst",
            "regdst-mux",
            "regdst-to-wr",

            "funct-to-signext",
            "sign-extend",
            "funct-to-signext",

            "funct-to-alucontrol",
            "alu-control",
        ],
    },
    EX: {
        critical: [
            "registers",
            "rd1-to-alu",
            "alu",
        ],
        nonCritical: [],
    },
    MEM: {
        critical: [
            "alu",
            "data-memory",
            "alu-to-dmem",
        ],
        nonCritical: ["rd2-to-dmem",],
    },
    // No write back to register for store word
}