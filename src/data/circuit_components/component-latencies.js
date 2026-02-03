/**
 * Component latencies in picoseconds (ps)
 * Based on typical MIPS single-cycle processor timing
 * These help students understand why certain paths are "critical"
 */

export const COMPONENT_LATENCIES = {
    // Memory components (slowest)
    "instruction-memory": { latency: 400, unit: "ps", label: "Inst Mem" },
    "data-memory": { latency: 350, unit: "ps", label: "Data Mem" },
    
    // Register file
    "registers": { latency: 200, unit: "ps", label: "Reg File" },
    
    // ALU and control
    "alu": { latency: 120, unit: "ps", label: "ALU" },
    "alu-control": { latency: 100, unit: "ps", label: "ALU Ctrl" },
    "control": { latency: 100, unit: "ps", label: "Control" },
    
    // Simple components
    "adder1": { latency: 100, unit: "ps", label: "Adder" },
    "adder2": { latency: 100, unit: "ps", label: "Adder" },
    "pc": { latency: 0, unit: "ps", label: "PC" }, // Register, negligible
    
    // Combinational logic (fast)
    "regdst-mux": { latency: 30, unit: "ps", label: "MUX" },
    "alusrc-mux": { latency: 30, unit: "ps", label: "MUX" },
    "memtoreg-mux": { latency: 30, unit: "ps", label: "MUX" },
    "pcsrc-mux": { latency: 30, unit: "ps", label: "MUX" },
    
    "sign-extend": { latency: 20, unit: "ps", label: "Sign Ext" },
    "left-shift-2bit": { latency: 20, unit: "ps", label: "Shift" },
    "decoder": { latency: 0, unit: "ps", label: "Decoder" }, // Just wire splitting
    "and-gate": { latency: 20, unit: "ps", label: "AND" },
};

/**
 * Critical path latencies for each instruction type
 * Students can see the total time and understand why it's the limiting factor
 */
export const CRITICAL_PATH_ANALYSIS = {
    "R_ALU": {
        name: "R-Type (e.g., sub $25, $20, $5)",
        stages: [
            { stage: "IF", components: ["instruction-memory"], latency: 400 },
            { stage: "ID", components: ["registers"], latency: 200 },
            { stage: "EX", components: ["alu"], latency: 120 },
            { stage: "MEM", components: ["memtoreg-mux"], latency: 30 },
            { stage: "WB", components: ["registers"], latency: 200 },
        ],
        totalLatency: 950,
        description: "PC → Inst Mem → Registers (read) → ALU → MUX → Registers (write)"
    },
    "LOAD": {
        name: "Load Word (e.g., lw $24, 0($15))",
        stages: [
            { stage: "IF", components: ["instruction-memory"], latency: 400 },
            { stage: "ID", components: ["registers"], latency: 200 },
            { stage: "EX", components: ["alu"], latency: 120 },
            { stage: "MEM", components: ["data-memory"], latency: 350 },
            { stage: "WB", components: ["registers"], latency: 200 },
        ],
        totalLatency: 1270,
        description: "PC → Inst Mem → Registers → ALU → Data Mem → Registers (write)"
    },
    "STORE": {
        name: "Store Word (e.g., sw $24, 0($15))",
        stages: [
            { stage: "IF", components: ["instruction-memory"], latency: 400 },
            { stage: "ID", components: ["registers"], latency: 200 },
            { stage: "EX", components: ["alu"], latency: 120 },
            { stage: "MEM", components: ["data-memory"], latency: 350 },
        ],
        totalLatency: 1070,
        description: "PC → Inst Mem → Registers → ALU → Data Mem (write)"
    },
    "BRANCH": {
        name: "Branch (e.g., beq $1, $3, 12)",
        stages: [
            { stage: "IF", components: ["instruction-memory"], latency: 400 },
            { stage: "ID", components: ["registers"], latency: 200 },
            { stage: "EX", components: ["alu"], latency: 120 },
            { stage: "MEM", components: ["and-gate", "pcsrc-mux"], latency: 50 },
        ],
        totalLatency: 770,
        description: "PC → Inst Mem → Registers → ALU (compare) → Branch decision"
    },
    "I": {
        name: "I-Type ALU (e.g., addi, andi)",
        stages: [
            { stage: "IF", components: ["instruction-memory"], latency: 400 },
            { stage: "ID", components: ["registers"], latency: 200 },
            { stage: "EX", components: ["alu"], latency: 120 },
            { stage: "MEM", components: ["memtoreg-mux"], latency: 30 },
            { stage: "WB", components: ["registers"], latency: 200 },
        ],
        totalLatency: 950,
        description: "PC → Inst Mem → Registers → ALU → MUX → Registers (write)"
    },
    "JUMP": {
        name: "Jump (e.g., j label)",
        stages: [
            { stage: "IF", components: ["instruction-memory"], latency: 400 },
            { stage: "ID", components: ["control"], latency: 100 },
        ],
        totalLatency: 500,
        description: "PC → Inst Mem → Control → PC (jump target)"
    },
};

/**
 * Get the minimum cycle time for the processor
 * This is determined by the longest (critical) path
 */
export function getMinCycleTime() {
    const latencies = Object.values(CRITICAL_PATH_ANALYSIS).map(p => p.totalLatency);
    return Math.max(...latencies);
}
