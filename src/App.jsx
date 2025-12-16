import { useState } from 'react'
import './App.css'
import Circuit from './Circuit'

function App() {
    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>
            <Circuit />
        </div>
    )
}

export default App
