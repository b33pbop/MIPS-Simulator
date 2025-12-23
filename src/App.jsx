import { useState } from 'react'
import './styles/App.css'
import Circuit from './Circuit'
import UserInput from './UserInput'

function App() {
    const [instruction, setInstruction] = useState("");

    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>
            <UserInput 
                instruction={instruction}
                setInstruction={setInstruction}
            />
            <Circuit instruction={instruction}/>
        </div>
    )
}

export default App
