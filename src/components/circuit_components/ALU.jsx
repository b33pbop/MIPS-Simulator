export default function ALU({ x, y, active=false }) {
    const width = 110;
    const height = 240;
    const slant = 60;

    return (
        <g transform={`translate(${x}, ${y})`}>
            <polygon
                points={`
                    0,0
                    ${width},${slant}
                    ${width},${height - slant}
                    0,${height} 
                `}
                fill="#FFFFFF"
                stroke={active ? "blue" : "black"}
                strokeWidth={active ? 3 : 1}
            />

            {/* isZero output */}
            <text
                x={width - 5}
                y={slant + 20}
                textAnchor="end"
                dominantBaseline="middle"
            >
                is0
            </text>

            {/* ALU label */}
            <text
                x={width / 2}
                y={height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
                fontWeight="bold"
            >
                ALU
            </text>

            {/* Result label */}
            <text
                x={width - 10}
                y={height - slant - 22}
                textAnchor="end"
                dominantBaseline="middle"
            >
                ALU
            </text>
            <text
                x={width - 10}
                y={height - slant - 6}
                textAnchor="end"
                dominantBaseline="middle"
            >
                result
            </text>
        </g>
    );
}
