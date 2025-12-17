export default function ALUControl({ x, y, active }) {
    const width = 170;
    const height = 80;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="red"
                rx="15"
            />
            <text 
                x={width/2} y={height/2 - 15} 
                textAnchor="middle" 
                dominantBaseline="middle"
                style={{fontSize: "25px", fontWeight: "bold"}} 
            >
                ALU
            </text>
            <text 
                x={width/2} y={height/2 + 15}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{fontSize: "25px", fontWeight: "bold"}}
            >
                Control
            </text>
        </g>
    );
}
