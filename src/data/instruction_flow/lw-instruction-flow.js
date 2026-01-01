export const LW_INSTRUCTION_FLOW = {
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

            "rt-to-regdst",
            "regdst-mux",
            "regdst-to-wr",

            "funct-to-signext",
            "sign-extend",
            "funct-to-signext",
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
            "memtoreg-mux",
            "data-memory",
            "alu-to-dmem",
            "dmem-to-memtoreg",
        ],
        nonCritical: [],
    },
    WB: {
        critical: [
            "memtoreg-mux",
            "memtoreg-to-wd",
        ],
        nonCritical: [],
    },
}