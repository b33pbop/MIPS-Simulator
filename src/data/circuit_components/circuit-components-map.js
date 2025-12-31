/**
 * Get circuit components to be rendered in Circuit.jsx
 * @param {*} Components 
 * @returns 
 */
export const getCircuitComponents = (Components) => [
    { id: "instruction-memory", Component: Components.InstructionMemory, x: 150, y: 40 },
    { id: "decoder", Component: Components.Decoder, x: 200, y: 230 },
    { id: "pc", Component: Components.PC, x: 375, y: 50 },
    { id: "regdst-mux", Component: Components.Multiplexer, x: 400, y: 520 },
    { id: "control", Component: Components.Control, x: 490, y: 180 },
    { id: "adder1", Component: Components.Adder, x: 520, y: 60 },
    { id: "registers", Component: Components.Registers, x: 520, y: 380 },
    { id: "sign-extend", Component: Components.SignExtend, x: 520, y: 720 },
    { id: "left-shift-2bit", Component: Components.LeftShift2Bit, x: 650, y: 180 },
    { id: "alu-control", Component: Components.ALUControl, x: 735, y: 830 },
    { id: "alusrc-mux", Component: Components.Multiplexer, x: 800, y: 560 },
    { id: "alu", Component: Components.ALU, x: 920, y: 395 },
    { id: "adder2", Component: Components.Adder, x: 1010, y: 140 },
    { id: "and-gate", Component: Components.ANDGate, x: 1090, y: 230 },
    { id: "data-memory", Component: Components.DataMemory, x: 1110, y: 540 },
    { id: "pcsrc-mux", Component: Components.Multiplexer, x: 1160, y: 85 },
    { id: "memtoreg-mux", Component: Components.Multiplexer, x: 1340, y: 680 },
];
