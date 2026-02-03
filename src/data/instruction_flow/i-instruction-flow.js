export const I_FORMAT_INSTRUCTION_FLOW = {
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
            "registers",
            "rt-to-rr2",
        ],
        nonCritical: [
            "opcode-to-control",
            "control",

            "rt-to-regdst",
            "regdst-mux",
            "regdst-to-wr",

            "funct-to-signext",
            "sign-extend",

            "funct-to-alucontrol",
            "alu-control",
        ],
    },
    EX: {
        critical: [
            "rd1-to-alu",
            "signext-to-alusrc",
            "alusrc-mux",
            "alusrc-to-alu",
            "alu",
        ],
        nonCritical: [],
    },
    MEM: {
        critical: [
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
};
