import { useState } from 'react'
import './Styles/App.css'
import Circuit from './Circuit'
import UserInput from './UserInput'

function App() {
    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>
            <UserInput />
            <Circuit />
        </div>
    )
}

export default App
