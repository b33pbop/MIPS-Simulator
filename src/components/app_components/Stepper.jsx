import { useState, useEffect } from "react";
import { instructionTypeToInstructionFlowMap } from "../../data/instruction_flow/instruction-type-map";
import '../../styles/stepper.css'

export default function Stepper({ setActiveComponents, instructionType }) {
    const instructionFlow = instructionTypeToInstructionFlowMap[instructionType];
    const stages = Object.keys(instructionFlow); // ["IF", "ID", "EX", "MEM", "WB"]
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        activateStage(stages[0]);
    }, []);

    // activate next stage components
    const goNext = () => {
        if (currentStep < stages.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            activateStage(stages[nextStep]);
        }
    };

    const goPrev = () => {
        if (currentStep > 0) {
            deactivateStage(stages[currentStep]);
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);
            activateStage(stages[prevStep]);
        }
    };

    const activateStage = (stage) => {
        const flowStage = instructionFlow[stage];
        const updatedComponents = {};
        flowStage.critical.forEach(c => updatedComponents[c] = true); // activate all stage wires and components
        setActiveComponents(prev => ({ ...prev, ...updatedComponents }));
    };

    const deactivateStage = (stage) => {
        const flowStage = instructionFlow[stage];
        const updatedComponents = {};
        flowStage.critical.forEach(c => updatedComponents[c] = false); // activate all stage wires and components
        setActiveComponents(prev => ({ ...prev, ...updatedComponents }));
    }

    return (
        <div className="stepper-container">
            <div className="stepper-controls">
                <button onClick={goPrev} disabled={currentStep === 0}>Back</button>
                <span className="step-counter">{currentStep + 1} / {stages.length}</span>
                <button onClick={goNext} disabled={currentStep === stages.length - 1}>Next</button>
            </div>

            <div className="stepper-bar">
                {stages.map((stage, index) => (
                    <div
                        key={stage}
                        className={`step-dot ${index <= currentStep ? 'active' : ''}`}
                    ></div>
                ))}
            </div>
        </div>
    );
}
