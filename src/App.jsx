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
        type: null,
    });

    const allElements = componentsToElementParser();

    const [activeComponents, setActiveComponents] = useState(allElements);

    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>
            <UserInput 
                instruction={instruction}
                setInstruction={setInstruction}
                setOutput={setOutput}
            />
            <p>{output.output}</p>
            {output.type !== null ? <Stepper setActiveComponents={setActiveComponents} /> : <></>}
            <Circuit activeComponents={activeComponents}/>
        </div>
    )
}

export default App
