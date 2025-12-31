export const R_INSTRUCTION_FLOW = {
    IF: {
        components: [
            "instruction-memory",
            "decoder",
        ],
        wires: [
            "imem-to-decoder",
        ],
        // controlSignals: [],
        critical: [
            "instruction-memory",
            "imem-to-decoder",
        ],
    },
    ID: {
        components: [
            "decoder",
            "registers",
            "control",
            "alu-control",
        ],
        wires: [
            "opcode-to-control",
            "rs-to-rr1",
            "rt-to-rr2",
            "rd-to-regdst",
            "regdst-to-wr",
        ],
        // controlSignals: [
        //     "regdst-signal",
        //     "aluop-signal",
        //     "regwrite-signal",
        //     "alusrc-signal",
        // ],
        critical: [
            "rs-to-rr1",
            "rt-to-rr2",
            "registers",
        ],
    },
    EX: {
        components: [
            "registers",
            "alusrc-mux",
            "alu",
        ],
        wires: [
            "rd1-to-alu",
            "rd2-to-alusrc",
            "alusrc-to-alu",
        ],
        // controlSignals: [
        //     "aluop-signal"
        // ],
        critical: [
            "registers",
            "rd2-to-alusrc",
            "alusrc-mux",
            "alusrc-to-alu",
            "alu",
        ],
    },
    MEM: { // R-type doesn't access memory
        components: [
            "alu",
            "memtoreg-mux",
        ],
        wires: [
            "alu-to-memtoreg",
        ],
        // controlSignals: [],
        critical: [
            "alu",
            "alu-to-memtoreg",
            "memtoreg-mux",
        ],
    },
    WB: {
        components: [
            "registers",
            "memtoreg-mux",
        ],
        wires: [
            "memtoreg-to-wd",
        ],
        // controlSignals: [
        //     "regwrite-signal",
        //     "memtoreg-signal"
        // ],
        critical: [
            "memtoreg-mux",
            "memtoreg-to-wd",
            "registers",
        ],
    },
}