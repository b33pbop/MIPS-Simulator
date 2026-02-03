export const R_INSTRUCTION_FLOW = {
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

            "rd-to-regdst",
            "regdst-mux",
            "regdst-to-wr",

            "funct-to-alucontrol",
            "alu-control",
        ],
    },
    EX: {
        critical: [
            "registers",
            "rd2-to-alusrc",
            "alusrc-mux",
            "alusrc-to-alu",
            "alu",
        ],
        nonCritical: [
            "rd1-to-alu",
        ],
    },
    MEM: {
        critical: [
            "alu",
            "alu-to-memtoreg",
            "memtoreg-mux",
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