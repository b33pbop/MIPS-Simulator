export default function InstructionMemory({ x, y, active=false }) {
    const width = 150;
    const height = 170;

    const titleLabelStyle = {
        fontWeight: "bold",
        fontSize: "25px",
        fill: "#A92418",
    }

    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#E6E5BF"
                stroke={active ? "blue" : "black"}
                strokeWidth={active ? 3 : 1}
            />
            <text 
                x={width/2} y="25" 
                textAnchor="middle"
                style={titleLabelStyle}
            >
                Instruction
            </text>
            <text 
                x={width/2} y="50"
                textAnchor="middle"
                style={titleLabelStyle}
            >
                Memory
            </text>
            <text 
                x="85" y="80"
                textAnchor="end"
                style={{fontSize: "15px", fontWeight: "bold"}}
                dominantBaseline="middle"
            >
                Instruction
            </text>
            <text 
                x="85" y="155"
                textAnchor="start"
                style={{fontSize: "15px", fontWeight: "bold"}} 
                dominantBaseline="middle"
            >
                Address
            </text>
        </g>
    );
}
