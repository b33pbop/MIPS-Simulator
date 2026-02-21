import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

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
                fill="#f0f9ff"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
            />

            {/* isZero output */}
            <text
                x={width - 5}
                y={slant + 20}
                textAnchor="end"
                dominantBaseline="middle"
                fill="#475569"
                fontSize="12"
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
                fill="#0369a1"
                fontSize="16"
            >
                ALU
            </text>

            {/* Result label */}
            <text
                x={width - 10}
                y={height - slant - 22}
                textAnchor="end"
                dominantBaseline="middle"
                fill="#475569"
                fontSize="11"
            >
                ALU
            </text>
            <text
                x={width - 10}
                y={height - slant - 6}
                textAnchor="end"
                dominantBaseline="middle"
                fill="#475569"
                fontSize="11"
            >
                result
            </text>
        </g>
    );
}
