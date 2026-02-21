import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function InstructionMemory({ x, y, active=false }) {
    const width = 150;
    const height = 170;

    const titleLabelStyle = {
        fontWeight: "bold",
        fontSize: "20px",
        fill: "#6d28d9",
    }

    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#f5f3ff"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="4"
            />
            <text 
                x={width/2} y="30" 
                textAnchor="middle"
                style={titleLabelStyle}
            >
                Instruction
            </text>
            <text 
                x={width/2} y="52"
                textAnchor="middle"
                style={titleLabelStyle}
            >
                Memory
            </text>
            <text 
                x="85" y="85"
                textAnchor="end"
                style={{fontSize: "12px", fontWeight: "600", fill: "#475569"}}
                dominantBaseline="middle"
            >
                Instruction
            </text>
            <text 
                x="85" y="155"
                textAnchor="start"
                style={{fontSize: "12px", fontWeight: "600", fill: "#475569"}} 
                dominantBaseline="middle"
            >
                Address
            </text>
        </g>
    );
}
