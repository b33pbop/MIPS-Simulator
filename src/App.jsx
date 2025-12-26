import { useState } from 'react'
import './styles/app.css'
import Circuit from './components/app_components/Circuit'
import UserInput from './components/app_components/UserInput'

function App() {
    const [instruction, setInstruction] = useState("");
    const [output, setOutput] = useState("");

    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>
            <UserInput 
                instruction={instruction}
                setInstruction={setInstruction}
                output={output}
                setOutput={setOutput}
            />
            <p>{output}</p>
            <Circuit instruction={instruction}/>
        </div>
    )
}

export default App
