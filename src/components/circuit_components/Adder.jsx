export default function Adder({ x, y, active=false }) {
    const width = 80;
    const height = 90;
    const slant = 20;
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

            <text
                x={width / 2}
                y={height / 2}
                textAnchor="middle"
                dominantBaseline="middle"
            >
                Add
            </text>
        </g>
    );
}

