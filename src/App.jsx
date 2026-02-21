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
                <div className="header-brand">
                    <div className="header-logo">M</div>
                    <div>
                        <h1 id='title'>MIPS Simulator</h1>
                        <span className="header-subtitle">Interactive CPU Visualization</span>
                    </div>
                </div>
                <div className="header-actions">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="help-link">
                        Documentation
                    </a>
                </div>
            </header>

            {/* Main Layout */}
            <div className="main-wrapper">
                {/* Left Sidebar - Controls */}
                <aside className="sidebar">
                    {/* Input Section */}
                    <div className="sidebar-section">
                        <div className="section-header">
                            <div className="section-icon">&#9998;</div>
                            <span className="section-title">Instruction Input</span>
                        </div>
                        <UserInput 
                            instruction={instruction}
                            setInstruction={setInstruction}
                            setOutput={setOutput}
                        />
                        
                        {/* Example Instructions */}
                        <div className="instruction-examples">
                            <div className="examples-title">Try These Examples</div>
                            <div className="example-chips">
                                <button className="example-chip" onClick={() => setInstruction('add $t0, $s1, $s2')}>add $t0, $s1, $s2</button>
                                <button className="example-chip" onClick={() => setInstruction('lw $t1, 0($s0)')}>lw $t1, 0($s0)</button>
                                <button className="example-chip" onClick={() => setInstruction('sw $t1, 4($s0)')}>sw $t1, 4($s0)</button>
                                <button className="example-chip" onClick={() => setInstruction('addi $t1, $zero, 5')}>addi $t1, $zero, 5</button>
                            </div>
                        </div>
                    </div>

                    {/* Stepper Controls */}
                    <Stepper 
                        setActiveComponents={setActiveComponents} 
                        instructionType={output.path}
                        onStageChange={setCurrentStage}
                        disabled={output.path === null}
                    />

                    {/* Educational Info */}
                    <div className="sidebar-section">
                        <div className="educational-callout">
                            <div className="callout-icon">i</div>
                            <div className="callout-content">
                                <div className="callout-title">How to Use</div>
                                <div className="callout-text">
                                    Enter a MIPS instruction to visualize its execution path through the CPU datapath. Use the step controls to advance through each pipeline stage.
                                </div>
                            </div>
                        </div>
                    </div>
                </aside>

                {/* Main Content - Circuit Visualization */}
                <main className="main-content">
                    <div className="circuit-section">
                        <div className="circuit-header">
                            <div className="circuit-title">
                                <span>&#9881;</span>
                                <span>MIPS Single-Cycle Datapath</span>
                            </div>
                            {output.path && (
                                <div className="circuit-badge">
                                    <span>&#9679;</span>
                                    <span>Stage: {currentStage}</span>
                                </div>
                            )}
                        </div>
                        <div className="circuit-container">
                            <Circuit activeComponents={activeComponents}/>
                        </div>
                    </div>
                </main>

                {/* Right Panel - Analysis */}
                <aside className="analysis-panel">
                    <TimingAnalysis 
                        instructionType={output.path} 
                        currentStage={currentStage}
                    />
                </aside>
            </div>

            {/* Bottom Panel - Instruction Encoding */}
            <div className="bottom-panel">
                <InstructionEncoding instruction={instruction} />
            </div>
        </div>
    )
}

export default App
