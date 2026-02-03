export const JUMP_INSTRUCTION_FLOW = {
    IF: {
        critical: [
            "instruction-memory",
            "imem-to-decoder",
            "decoder",
        ],
        nonCritical: [],
    },
    ID: {
        critical: [],
        nonCritical: [
            "opcode-to-control",
            "control",
        ],
    },
    EX: {
        critical: [],
        nonCritical: [],
    },
    MEM: {
        critical: [],
        nonCritical: [],
    },
    WB: {
        critical: [],
        nonCritical: [],
    },
};
