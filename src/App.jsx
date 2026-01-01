import { useState } from 'react'
import './styles/app.css'
import Circuit from './components/app_components/Circuit'
import UserInput from './components/app_components/UserInput'
import Stepper from './components/app_components/Stepper'
import componentsToElementParser from './logic/parser/component-to-element-parser';

function App() {
    const [instruction, setInstruction] = useState("");
     // e.g. {"Valid instruction", INSTRUCTIONS.add}
    const [output, setOutput] = useState({
        output: "",
        path: null,
    });

    const allElements = componentsToElementParser();

    const [activeComponents, setActiveComponents] = useState(allElements);

    console.log(`Output path: ${output.path}`);

    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>
            <UserInput 
                instruction={instruction}
                setInstruction={setInstruction}
                setOutput={setOutput}
            />
            <p>{output.output}</p>
            {output.path !== null 
                ? <Stepper setActiveComponents={setActiveComponents} instructionType={output.path} />
                : <></>}
            <Circuit activeComponents={activeComponents}/>
        </div>
    )
}

export default App
