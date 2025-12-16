export default function InstructionMemory({ x, y, active }) {
    const width = 150;
    const height = 170;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <text x={width/2} y="20" textAnchor="middle">Instruction</text>
            <text x={width/2} y="40" textAnchor="middle">Memory</text>
            <text x="80" y="85" textAnchor="end" style={{fontSize: "15px", fontWeight: "bold"}}>Instruction</text>
            <text x="85" y="160" textAnchor="start" style={{fontSize: "15px", fontWeight: "bold"}}>Address</text>
        </g>
    );
}
