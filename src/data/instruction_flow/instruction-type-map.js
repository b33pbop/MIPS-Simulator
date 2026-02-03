import { BRANCH_INSTRUCTION_FLOW } from "./branch-instruction-flow";
import { I_FORMAT_INSTRUCTION_FLOW } from "./i-instruction-flow";
import { JUMP_INSTRUCTION_FLOW } from "./jump-instruction-flow";
import { LW_INSTRUCTION_FLOW } from "./lw-instruction-flow";
import { R_INSTRUCTION_FLOW } from "./r-instruction-flow";
import { SW_INSTRUCTION_FLOW } from "./sw-instruction-flow";

export const instructionTypeToInstructionFlowMap = {
    "R_ALU": R_INSTRUCTION_FLOW,
    "LOAD": LW_INSTRUCTION_FLOW,
    "STORE": SW_INSTRUCTION_FLOW,
    "BRANCH": BRANCH_INSTRUCTION_FLOW,
    "I": I_FORMAT_INSTRUCTION_FLOW,
    "JUMP": JUMP_INSTRUCTION_FLOW,
}
