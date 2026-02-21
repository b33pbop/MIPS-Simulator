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
                    <polygon points="0,0 6,3 0,6" fill="#64748b" />
                </marker>
                <marker
                    id="arrowhead-active"
                    markerWidth="6"
                    markerHeight="6"
                    refX="5.5"
                    refY="3"
                    orient="auto"
                >
                    <polygon points="0,0 6,3 0,6" fill="#2563eb" />
                </marker>
                <filter id="legendShadow" x="-20%" y="-20%" width="140%" height="140%">
                    <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.1"/>
                </filter>
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
                    fill="#475569"
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
            <g transform="translate(1300, 15)">
                <rect width="240" height="110" fill="#ffffff" stroke="#e2e8f0" strokeWidth="2" rx="12" filter="url(#legendShadow)" />
                <text x="120" y="28" textAnchor="middle" fontWeight="bold" fontSize="16" fill="#1e293b">Path Legend</text>
                
                {/* Critical Path */}
                <line x1="20" y1="58" x2="70" y2="58" stroke={ACTIVE_COLORS.critical} strokeWidth="5" strokeLinecap="round" />
                <text x="85" y="63" fontSize="15" fill="#475569" fontWeight="500">Critical Path</text>
                
                {/* Non-Critical Path */}
                <line x1="20" y1="88" x2="70" y2="88" stroke={ACTIVE_COLORS.nonCritical} strokeWidth="5" strokeLinecap="round" />
                <text x="85" y="93" fontSize="15" fill="#475569" fontWeight="500">Non-Critical Path</text>
            </g>
        </svg>
    )
}
