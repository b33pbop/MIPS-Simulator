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
import LeftShift2Bit from './components/LeftShift2Bit'
import PCSrc from './components/PCSrc'
import './App.css'

export default function Circuit() {
    return (
        <svg width="100%" height="80vh" viewBox="100 100 1450 850" preserveAspectRatio="xMidYMid meet">
            {/* Circuit Components */}
            <InstructionMemory x={150} y={80} active={true} />
            <Decoder x={200} y={270} active={false} />
            <PC x={375} y={90} active={false} />
            <Multiplexer x={400} y={560} active={true} />
            <Control x={500} y={230} active={true} />
            <Adder x={520} y={100} active={false} />
            <Registers x={520} y={420} active={false} />
            <SignExtend x={520} y={780} active={false} />
            <LeftShift2Bit x={650} y={230} active={false} />
            <ALUControl x={735} y={850} active={true} />
            <Multiplexer x={800} y={600} active={true} />
            <ALU x={920} y={450} active={false} />
            <Adder x={1050} y={190} active={false} />
            <PCSrc x={1130} y={300} active={false} />
            <DataMemory x={1150} y={580} active={false} />
            <Multiplexer x={1200} y={135} active={true} />
            <Multiplexer x={1400} y={720} active={true} />

            {/* Circuit Wiring */}
        </svg>
    )
}