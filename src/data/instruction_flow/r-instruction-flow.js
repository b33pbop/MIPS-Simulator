export const R_INSTRUCTION_FLOW = {
    IF: {
        components: [
            "InstructionMemory",
            "Decoder",
        ],
        wires: [
            "imem-to-decoder",
        ],
        // controlSignals: [],
        critical: [
            "InstructionMemory",
            "imem-to-decoder",
        ],
    },
    ID: {
        components: [
            "Decoder",
            "Registers",
            "Control",
            "ALUControl",
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
            "Registers",
        ],
    },
    EX: {
        components: [
            "Register",
            "Multiplexer", // ALUSrc
            "ALU",
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
            "Register",
            "rd2-to-alusrc",
            "Multiplexer", // ALUSrc
            "alusrc-to-alu",
            "ALU",
        ],
    },
    MEM: { // R-type doesn't access memory
        components: [
            "ALU",
            "Multiplexer", // MemToReg
        ],
        wires: [
            "alu-to-memtoreg",
        ],
        // controlSignals: [],
        critical: [
            "ALU",
            "alu-to-memtoreg",
            "Multiplexer", // MemToReg
        ],
    },
    WB: {
        components: [
            "Registers",
            "Multiplexer", // MemToReg for ALU result
        ],
        wires: [
            "memtoreg-to-wd",
        ],
        // controlSignals: [
        //     "regwrite-signal",
        //     "memtoreg-signal"
        // ],
        critical: [
            "Multiplexer", // MemToReg for ALU result
            "memtoreg-to-wd",
            "Registers",
        ],
    },
}