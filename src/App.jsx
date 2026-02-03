import { useState } from 'react'
import './styles/app.css'
import Circuit from './components/app_components/Circuit'
import UserInput from './components/app_components/UserInput'
import Stepper from './components/app_components/Stepper'
import TimingAnalysis from './components/app_components/TimingAnalysis'
import InstructionEncoding from './components/InstructionEncoding'
import componentsToElementParser from './logic/parser/component-to-element-parser';
import './styles/timing-analysis.css'
import './styles/instruction-encoding.css'

function App() {
    const [instruction, setInstruction] = useState("");
     // e.g. {"Valid instruction", INSTRUCTIONS.add}
    const [output, setOutput] = useState({
        output: "",
        path: null,
    });

    const allElements = componentsToElementParser();

    const [activeComponents, setActiveComponents] = useState(allElements);
    const [currentStage, setCurrentStage] = useState("IF");

    console.log(`Output path: ${output.path}`);

    return (
        <div className='app'>
            {/* Header */}
            <header className="app-header">
                <h1 id='title'>MIPS Simulator</h1>
                <UserInput 
                    instruction={instruction}
                    setInstruction={setInstruction}
                    setOutput={setOutput}
                />
            </header>

            {/* Stepper Controls - always visible */}
            <Stepper 
                setActiveComponents={setActiveComponents} 
                instructionType={output.path}
                onStageChange={setCurrentStage}
                disabled={output.path === null}
            />

            {/* Main Content: Circuit + Critical Path Analysis */}
            <main className="main-content">
                <div className="circuit-container">
                    <Circuit activeComponents={activeComponents}/>
                </div>
                <aside className="analysis-panel">
                    <TimingAnalysis 
                        instructionType={output.path} 
                        currentStage={currentStage}
                    />
                </aside>
            </main>

            {/* Bottom: Instruction Encoding (full width) */}
            <InstructionEncoding instruction={instruction} />
        </div>
    )
}

export default App
