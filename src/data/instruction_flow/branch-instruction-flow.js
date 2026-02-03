export const BRANCH_INSTRUCTION_FLOW = {
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

            "funct-to-signext",
            "sign-extend",

            "funct-to-alucontrol",
            "alu-control",
        ],
    },
    EX: {
        critical: [
            "rd1-to-alu",
            "rd2-to-alusrc",
            "alusrc-mux",
            "alusrc-to-alu",
            "alu",
        ],
        nonCritical: [
            "signext-to-shift",
            "left-shift-2bit",
            "shift-to-adder",
            "adder2",
        ],
    },
    MEM: {
        critical: [
            "iszero-signal",
            "and-gate",
            "pcsrc-mux",
            "pcsrc-signal",
        ],
        nonCritical: [
            "adder-to-pcsrc-bottom",
            "adder-to-pcsrc-top",
            "pcsrc-to-pc",
        ],
    },
    WB: {
        critical: [],
        nonCritical: [],
    },
};
