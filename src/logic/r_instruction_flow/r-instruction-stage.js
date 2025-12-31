import { R_INSTRUCTION_FLOW } from "../../data/instruction_flow/r-instruction-flow";

export default function activateRFormatStage(stage, setActiveComponents) {
    const flowStage = R_INSTRUCTION_FLOW[stage];

    // get current state to update 
    setActiveComponents(prev => {
        const next = { ...prev};

        flowStage.critical.forEach(id => {
            next[id] = true;
        })

        return next;
    })
}
