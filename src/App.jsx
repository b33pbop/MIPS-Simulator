import { useState } from 'react'
import './App.css'
import InstructionMemory from './components/InstructionMemory'
import PC from './components/PC'
import Adder from './components/Adder'
import Control from './components/Control'
import Decoder from './components/Decoder'
import ALUControl from './components/ALUControl'
import Multiplexer from './components/Multiplexer'
import Registers from './components/Registers'
import SignExtend from './components/SignExtend'
import ALU from './components/ALU'
import DataMemory from './components/DataMemory'
import Wire from './components/Wire'

function App() {
    return (
        <div className='app'>
            <h1 id='title'>MIPS Simulator</h1>

            <svg width="100%" height="100vh">
                <InstructionMemory x={50} y={50} active={true} />
                <Decoder x={50} y={220} active={false} />
                <PC x={225} y={70} active={false} />
                <Adder x={350} y={85} active={false} />
                <Control x={350} y={180} active={true} />
                <Registers x={525} y={150} active={false} />
                <SignExtend x={525} y={300} active={false} />
                <ALUControl x={700} y={150} active={false} />
                <Multiplexer x={700} y={300} active={true} />
                <ALU x={875} y={200} active={false} />
                <DataMemory x={1050} y={200} active={false} />

                {/* Wires */}
                <Wire from={{x:150, y:90}} to={{x:225, y:90}} active={true} /> {/* IM to PC */}
                <Wire from={{x:275, y:110}} to={{x:350, y:110}} active={false} /> {/* PC to Adder */}
                <Wire from={{x:400, y:220}} to={{x:525, y:220}} active={false} /> {/* Control to Registers */}
                <Wire from={{x:625, y:190}} to={{x:700, y:190}} active={false} /> {/* Registers to ALUControl */}
                <Wire from={{x:625, y:340}} to={{x:700, y:340}} active={true} /> {/* SignExtend to MUX */}
                <Wire from={{x:800, y:240}} to={{x:875, y:240}} active={false} /> {/* ALUControl to ALU */}
                <Wire from={{x:975, y:240}} to={{x:1050, y:240}} active={false} /> {/* ALU to DataMemory */}
            </svg>
        </div>
    )
}

export default App
