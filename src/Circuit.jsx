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
import ANDGate from './components/ANDGate'
import './App.css'
import { datapathWireCoordinates } from './components/wires/DatapathWire'
import { junctions } from './components/wires/DatapathJunction'
import { conntrolPathWireCoordinates } from './components/wires/ControlPathWire'

export default function Circuit() {
    return (
        <svg width="100%" height="80vh" viewBox="0 0 1550 950" preserveAspectRatio="xMidYMid meet">
            <defs>
                <marker
                    id="arrowhead"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5.5"   // tip of the arrow will be at the end of the line
                    refY="3"  // vertical middle of arrow
                    orient="auto" // arrow rotates along line direction
                >
                    <polygon points="0,0 6,3 0,6" fill="black" />
                </marker>
            </defs>

            {/* Circuit Components */}
            <InstructionMemory x={150} y={80} active={true} />
            <Decoder x={200} y={270} active={false} />
            <PC x={375} y={90} active={false} />
            <Multiplexer x={400} y={560} active={true} />
            <Control x={490} y={220} active={true} />
            <Adder x={520} y={100} active={false} />
            <Registers x={520} y={420} active={false} />
            <SignExtend x={520} y={780} active={false} />
            <LeftShift2Bit x={650} y={220} active={false} />
            <ALUControl x={735} y={870} active={true} />
            <Multiplexer x={800} y={600} active={true} />
            <ALU x={920} y={435} active={false} />
            <Adder x={1010} y={180} active={false} />
            <ANDGate x={1090} y={270} active={false} />
            <DataMemory x={1110} y={580} active={false} />
            <Multiplexer x={1160} y={125} active={true} />
            <Multiplexer x={1340} y={720} active={true} />

            {/* Data Path Wires */}
            {datapathWireCoordinates.map(wire => (
                <Wire
                    key={wire.id}
                    points={wire.points}
                    arrowEnd={wire.arrowEnd}
                    isDatapath={true}
                />
            ))}

            {junctions.map((junction, index) => (
                <circle
                    key={index}
                    cx={junction.x}
                    cy={junction.y}
                    r={5} 
                    fill="black"
                />
            ))}

            {/* Control Path Wires */}
            {conntrolPathWireCoordinates.map(wire => (
                <Wire
                    key={wire.id}
                    points={wire.points}
                    arrowEnd={wire.arrowEnd}
                    isDatapath={false}
                />
            ))}
        </svg>
    )
}