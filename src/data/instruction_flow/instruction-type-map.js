import { LW_INSTRUCTION_FLOW } from "./lw-instruction-flow";
import { R_INSTRUCTION_FLOW } from "./r-instruction-flow";
import { SW_INSTRUCTION_FLOW } from "./sw-instruction-flow";

export const instructionTypeToInstructionFlowMap = {
    "R_ALU": R_INSTRUCTION_FLOW,
    "LOAD": LW_INSTRUCTION_FLOW,
    "STORE": SW_INSTRUCTION_FLOW,
}