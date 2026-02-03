import InstructionMemory from '../circuit_components/InstructionMemory'
import PC from '../circuit_components/PC'
import Adder from '../circuit_components/Adder'
import Control from '../circuit_components/Control'
import Decoder from '../circuit_components/Decoder'
import ALUControl from '../circuit_components/ALUControl'
import Multiplexer from '../circuit_components/Multiplexer'
import Registers from '../circuit_components/Registers'
import SignExtend from '../circuit_components/SignExtend'
import ALU from '../circuit_components/ALU'
import DataMemory from '../circuit_components/DataMemory'
import Wire from '../circuit_components/Wire'
import LeftShift2Bit from '../circuit_components/LeftShift2Bit'
import ANDGate from '../circuit_components/ANDGate'
import '../../styles/app.css'
import { datapathWireCoordinates } from '../../data/wires/datapath-wire'
import { junctions } from '../../data/wires/datapath-junction'
import { controlPathWireCoordinates } from '../../data/wires/control-path-wire'
import { getCircuitComponents } from '../../data/circuit_components/circuit-components-map'

import { ACTIVE_COLORS } from '../../utils/active-state-colors'

const Components = {
    InstructionMemory,
    PC,
    Decoder,
    Multiplexer,
    Control,
    Adder,
    Registers,
    SignExtend,
    LeftShift2Bit,
    ALUControl,
    ALU,
    ANDGate,
    DataMemory
};

const circuitComponents = getCircuitComponents(Components);

export default function Circuit({activeComponents}) {
    return (
        <svg viewBox="0 0 1550 950" preserveAspectRatio="xMidYMid meet">
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
            {circuitComponents.map(({ id, Component, x, y }) => (
                <Component key={id} x={x} y={y} id={id} active={activeComponents[id]} />
            ))}

            {/* Data Path Wires */}
            {datapathWireCoordinates.map(wire => (
                <Wire
                    key={wire.id}
                    points={wire.points}
                    arrowEnd={wire.arrowEnd}
                    isDatapath={true}
                    id={wire.id}
                    active={activeComponents[wire.id]}
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
            {controlPathWireCoordinates.map(wire => (
                <Wire
                    key={wire.id}
                    points={wire.points}
                    arrowEnd={wire.arrowEnd}
                    isDatapath={false}
                    id={wire.id}
                    active={activeComponents[wire.id]}
                />
            ))}

            {/* Path Legend */}
            <g transform="translate(1350, 20)">
                <rect width="180" height="80" fill="white" stroke="#ccc" strokeWidth="1" rx="5" />
                <text x="90" y="18" textAnchor="middle" fontWeight="bold" fontSize="14">Path Legend</text>
                
                {/* Critical Path */}
                <line x1="15" y1="40" x2="45" y2="40" stroke={ACTIVE_COLORS.critical} strokeWidth="3" />
                <text x="55" y="44" fontSize="12">Critical Path</text>
                
                {/* Non-Critical Path */}
                <line x1="15" y1="60" x2="45" y2="60" stroke={ACTIVE_COLORS.nonCritical} strokeWidth="3" />
                <text x="55" y="64" fontSize="12">Non-Critical Path</text>
            </g>
        </svg>
    )
}
