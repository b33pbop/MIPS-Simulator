# MIPS Simulator

An interactive, educational web application for visualizing MIPS CPU datapath execution. This tool helps students understand how instructions flow through a single-cycle MIPS processor by animating the critical and non-critical paths at each pipeline stage.

## Features

- **Interactive Datapath Visualization**: View a complete MIPS single-cycle datapath with all major components (PC, Instruction Memory, Registers, ALU, Data Memory, Control Unit, etc.)
- **Step-by-Step Execution**: Navigate through pipeline stages (IF, ID, EX, MEM, WB) to see how data flows through the processor
- **Critical Path Highlighting**: Distinguish between critical and non-critical paths with color-coded visualization
- **Instruction Encoding Display**: View the binary and hexadecimal encoding of instructions with field breakdowns (opcode, rs, rt, rd, etc.)
- **Timing Analysis**: Understand component latencies and why certain paths determine the clock cycle

## Supported Instructions

### R-Type (Register)

- Arithmetic: `add`, `sub`
- Logical: `and`, `or`, `nor`
- Comparison: `slt`

### I-Type (Immediate)

- Arithmetic: `addi`, `slti`
- Logical: `andi`, `ori`
- Memory: `lw`, `sw`
- Branch: `beq`, `bne` (e.g., `beq $t0, $t1, label`)

### J-Type (Jump) (WIP)

- `j` (e.g., `j label`)

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/b33pbop/MIPS-Simulator.git
cd MIPS-Simulator

# Install dependencies
npm install

# Start the development server
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## Usage

1. Enter a MIPS instruction in the input field (e.g., `add $t0, $s1, $s2`)
2. Click **Submit** to load the instruction
3. Use the **Back** and **Next** buttons to step through pipeline stages
4. Observe the datapath highlighting to see which components are active
5. View the instruction encoding breakdown in the bottom panel
6. Check the timing analysis panel for critical path information

## Project Structure

```
src/
├── components/
│   ├── app_components/      # Main application components
│   │   ├── Circuit.jsx      # SVG datapath visualization
│   │   ├── Stepper.jsx      # Pipeline stage navigation
│   │   ├── TimingAnalysis.jsx
│   │   └── UserInput.jsx
│   ├── circuit_components/  # Individual datapath components
│   └── InstructionEncoding.jsx
├── data/
│   ├── circuit_components/  # Component positions and latencies
│   ├── instruction_flow/    # Stage-by-stage activation data
│   ├── mips_data/          # Instruction definitions and registers
│   └── wires/              # Wire routing coordinates
├── logic/
│   └── parser/             # Instruction parsing and validation
├── styles/                 # CSS stylesheets
└── utils/                  # Utility functions
```

## Technology Stack

- **React 19** - UI framework
- **Vite** - Build tool and development server
- **SVG** - Datapath visualization
- **CSS Variables** - Theming and styling

## Educational Purpose

This simulator is designed as a learning tool to help computer architecture students:

- Understand the single-cycle MIPS datapath
- Visualize how different instruction types use different paths through the CPU
- Learn about critical paths and their impact on clock cycle time
- See the relationship between assembly instructions and their binary encoding

## License

MIT License

## Acknowledgments

- Inspired by educational visualization tools like VisualGo
- Based on the MIPS architecture as described in "Computer Organization and Design" by Patterson and Hennessy
