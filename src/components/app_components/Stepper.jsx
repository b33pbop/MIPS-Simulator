import { useState, useEffect } from "react";
import { instructionTypeToInstructionFlowMap } from "../../data/instruction_flow/instruction-type-map";
import componentsToElementParser from '../../logic/parser/component-to-element-parser';
import '../../styles/stepper.css'

const DEFAULT_STAGES = ["IF", "ID", "EX", "MEM", "WB"];

export default function Stepper({ setActiveComponents, instructionType, onStageChange, disabled = false }) {
    const instructionFlow = instructionType ? instructionTypeToInstructionFlowMap[instructionType] : null;
    const stages = instructionFlow ? Object.keys(instructionFlow) : DEFAULT_STAGES;
    const [currentStep, setCurrentStep] = useState(0);

    useEffect(() => {
        // Reset everything when instruction type changes
        setCurrentStep(0);
        
        // Reset all components to inactive first
        const resetComponents = componentsToElementParser();
        setActiveComponents(resetComponents);
        
        // Then activate the first stage if we have a valid instruction
        if (instructionFlow) {
            const flowStage = instructionFlow[stages[0]];
            const updatedComponents = { ...resetComponents };
            flowStage.critical.forEach(c => updatedComponents[c] = "critical");
            flowStage.nonCritical.forEach(c => updatedComponents[c] = "nonCritical");
            setActiveComponents(updatedComponents);
            onStageChange?.(stages[0]);
        }
    }, [instructionType]);

    // activate next stage components
    const goNext = () => {
        if (disabled || !instructionFlow) return;
        if (currentStep < stages.length - 1) {
            const nextStep = currentStep + 1;
            setCurrentStep(nextStep);
            activateStage(stages[nextStep]);
            onStageChange?.(stages[nextStep]);
        }
    };

    const goPrev = () => {
        if (disabled || !instructionFlow) return;
        if (currentStep > 0) {
            deactivateStage(stages[currentStep]);
            const prevStep = currentStep - 1;
            setCurrentStep(prevStep);
            activateStage(stages[prevStep]);
            onStageChange?.(stages[prevStep]);
        }
    };

    const activateStage = (stage) => {
        if (!instructionFlow) return;
        const flowStage = instructionFlow[stage];
        const updatedComponents = {};
        flowStage.critical.forEach(c => updatedComponents[c] = "critical"); // critical path (blue)
        flowStage.nonCritical.forEach(c => updatedComponents[c] = "nonCritical"); // non-critical path (green)
        setActiveComponents(prev => ({ ...prev, ...updatedComponents }));
    };

    const deactivateStage = (stage) => {
        if (!instructionFlow) return;
        const flowStage = instructionFlow[stage];
        const updatedComponents = {};
        flowStage.critical.forEach(c => updatedComponents[c] = false);
        flowStage.nonCritical.forEach(c => updatedComponents[c] = false);
        setActiveComponents(prev => ({ ...prev, ...updatedComponents }));
    }

    return (
        <div className={`stepper-container ${disabled ? 'disabled' : ''}`}>
            <div className="stepper-controls">
                <button onClick={goPrev} disabled={disabled || currentStep === 0}>← Back</button>
                <span className="step-counter">
                    {disabled ? 'Enter an instruction' : <>Stage: <strong>{stages[currentStep]}</strong></>}
                </span>
                <button onClick={goNext} disabled={disabled || currentStep === stages.length - 1}>Next →</button>
            </div>

            <div className="stepper-bar">
                {stages.map((stage, index) => (
                    <div
                        key={stage}
                        className={`step-dot ${!disabled && index <= currentStep ? 'active' : ''}`}
                        title={stage}
                    >
                        <span className="step-label">{stage}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
