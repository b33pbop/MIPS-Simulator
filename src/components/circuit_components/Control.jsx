export default function Control({ x, y, active }) {
    const width = 100;
    const height = 190;
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
                x={width/2} y={height/2 + 5} 
                textAnchor="middle" 
                dominantBaseline="middle"
                transform={`rotate(90 ${width / 2} ${height / 2})`}
                style={{
                    fontSize: "40px",
                    fontWeight: "bold"
                }}
                fill="#A92418"
            >
                Control
            </text>
        </g>
    );
}
