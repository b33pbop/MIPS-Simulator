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
            <Control x={490} y={230} active={true} />
            <Adder x={520} y={100} active={false} />
            <Registers x={520} y={420} active={false} />
            <SignExtend x={520} y={780} active={false} />
            <LeftShift2Bit x={650} y={230} active={false} />
            <ALUControl x={735} y={870} active={true} />
            <Multiplexer x={800} y={600} active={true} />
            <ALU x={920} y={435} active={false} />
            <Adder x={1010} y={190} active={false} />
            <ANDGate x={1090} y={300} active={false} />
            <DataMemory x={1110} y={580} active={false} />
            <Multiplexer x={1160} y={125} active={true} />
            <Multiplexer x={1340} y={720} active={true} />

            {/* Circuit Wiring */}
            {/* Datapaths */}
            {/* Instruction Memory to Decoder */}
            <Wire
                points={[
                    { x: 150, y: 160 },
                    { x: 110, y: 160 },
                    { x: 110, y: 570 },
                    { x: 150, y: 570 },
                ]}
                arrowEnd={true}
            />

            {/* Opcode to Control */}
            <Wire
                points={[
                    { x: 250, y: 310 },
                    { x: 490, y: 310 },
                ]}
            />

            {/* RS to RR1 */}
            <Wire
                points={[
                    { x: 250, y: 420 },
                    { x: 460, y: 455 },
                    { x: 520, y: 455 },
                ]}
                arrowEnd={true}
            />

            {/* RT to RR2 */}
            <Wire
                points={[
                    { x: 250, y: 520 },
                    { x: 460, y: 485 },
                    { x: 520, y: 485 },
                ]}
                arrowEnd={true}
            />

            {/* RT to RegDst MUX */}
            <circle cx={300} cy={512} r={5} fill="black" />

            <Wire
                points={[
                    { x: 300, y: 512 },
                    { x: 300, y: 600 },
                    { x: 400, y: 600 },
                ]}
            />
            
            {/* RD to RegDst MUX */}
            <Wire
                points={[
                    { x: 250, y: 640 },
                    { x: 400, y: 640 },
                ]}
            />

            {/* RegDst MUX to WR */}
            <Wire
                points={[
                    { x: 440, y: 630 },
                    { x: 460, y: 570 },
                    { x: 520, y: 570 },
                ]}
                arrowEnd={true}
            />

            {/* Funct to Sign Extend */}
            <Wire
                points={[
                    { x: 250, y: 810 },
                    { x: 520, y: 810 },
                ]}
            />

            {/* Sign Extend to Left Shift 2-Bit */}
            <Wire 
                points={[
                    { x: 670, y: 810 },
                    { x: 735, y: 810 },
                    { x: 735, y: 290 },
                ]}
            />

            {/* Sign Extend to ALUSrc */}
            <circle cx={735} cy={705} r={5} fill="black" />

            <Wire
                points={[
                    { x: 735, y: 705 },
                    { x: 800, y: 705 },
                ]}
            />

            {/* Funct to ALU Control */}
            <Wire
                points={[
                    { x: 250, y: 840 },
                    { x: 400, y: 840 },
                    { x: 400, y: 920 },
                    { x: 735, y: 920 },
                ]}
            />

            {/* PC to Adder */}
            <Wire
                points={[
                    { x: 435, y: 115 },
                    { x: 520, y: 115 },
                ]}
                arrowEnd={true}
            />

            {/* PC to Address of Instruction Memory */}
            <circle cx={450} cy={115} r={5} fill="black" />

            <Wire
                points={[
                    { x: 450, y: 115 },
                    { x: 450, y: 235 },
                    { x: 300, y: 235 },
                ]}
                arrowEnd={true}
            />

            {/* PC + 4 */}
            <Wire
                points={[
                    { x: 480, y: 170 },
                    { x: 520, y: 170 },
                ]}
                arrowEnd={true}
            />

            {/* Adder to PCSrc MUX */}
            <Wire 
                points={[
                    { x: 600, y: 140 },
                    { x: 1160, y: 140 }
                ]}
                arrowEnd={true}
            />

            {/* Adder to Adder */}
            <circle cx={735} cy={140} r={5} fill="black" />

            <Wire 
                points={[
                    { x: 735, y: 140 },
                    { x: 735, y: 205 },
                    { x: 1010, y: 205 },
                ]}
                arrowEnd={true}
            />

            {/* Left Shift 2-Bit to Adder */}
            <Wire 
                points={[
                    { x: 820, y: 260 },
                    { x: 1010, y: 260 },
                ]}
                arrowEnd={true}
            />

            {/* Adder to PCSrc MUX */}
            <Wire 
                points={[
                    { x: 1090, y: 230 },
                    { x: 1160, y: 230 },
                ]}
                arrowEnd={true}
            />

            {/* PCSrc MUX to PC */}
            <Wire 
                points={[
                    { x: 1200, y: 185 },
                    { x: 1240, y: 185 },
                    { x: 1240, y: 60 },
                    { x: 405, y: 60 },
                    { x: 405, y: 90 },
                ]}
                arrowEnd={true}
            />

            {/* RD1 to ALU */}
            <Wire 
                points={[
                    { x: 670, y: 455 },
                    { x: 920, y: 455 },
                ]}
                arrowEnd={true}
            />
            
            {/* RD2 to ALUSrc MUX */}
            <Wire 
                points={[
                    { x: 670, y: 615 },
                    { x: 800, y: 615 },        
                ]}
            />

            {/* RD2 to Write Data of Data Memory */}
            <circle cx={700} cy={615} r={5} fill="black" />

            <Wire
                points={[
                    { x: 700, y: 615 },
                    { x: 700, y: 770 },
                    { x: 1110, y: 770 },
                ]}
                arrowEnd={true}
            />

            {/* ALUSrc MUX to ALU */}
            <Wire 
                points={[
                    { x: 840, y: 660 },
                    { x: 920, y: 660 },
                ]}
                arrowEnd={true}
            />

            {/* ALU result to Address of Data Memory */}
            <Wire
                points={[
                    { x: 1030, y: 605 },
                    { x: 1110, y: 605 },
                ]}
                arrowEnd={true}
            />

            {/* Read Data of Data Memory to MemToReg MUX */}
            <Wire
                points={[
                    { x: 1280, y: 740 },
                    { x: 1340, y: 740 },
                ]}
                arrowEnd={true}
            />

            {/* ALU to MemToReg MUX */}
            <circle cx={1070} cy={605} r={5} fill="black" />
            <Wire
                points={[
                    { x: 1070, y: 605 },
                    { x: 1070, y: 820 },
                    { x: 1340, y: 820 },
                ]}
                arrowEnd={true}
            />

            {/* MemToReg MUX to WD */}
            <Wire
                points={[
                    { x: 1380, y: 780 },
                    { x: 1400, y: 780 },
                    { x: 1400, y: 855 },
                    { x: 480, y: 855 },
                    { x: 480, y: 655 },
                    { x: 520, y: 655 },
                ]}
                arrowEnd={true}
            />
        </svg>
    )
}