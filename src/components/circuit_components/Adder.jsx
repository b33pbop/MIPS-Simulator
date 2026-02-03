import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

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
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
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

