export default function ALUControl({ x, y, active=false }) {
    const width = 200;
    const height = 90;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#F0DED9"
                stroke="#9D5343"
                strokeWidth={3}
                rx="15"
            />
            <text 
                x={width/2} y={height/2 - 15} 
                textAnchor="middle" 
                dominantBaseline="middle"
                style={{fontSize: "35px", fontWeight: "bold"}}
                fill="#A92418"
            >
                ALU
            </text>
            <text 
                x={width/2} y={height/2 + 20}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{fontSize: "35px", fontWeight: "bold"}}
                fill="#A92418"
            >
                Control
            </text>
        </g>
    );
}
