import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function LeftShift2Bit({ x, y, active=false }) {
    const width = 170;
    const height = 60;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#fef3c7"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="80"
            />
            <text x={width/2} y={height/2 - 2} textAnchor="middle" fill="#b45309" fontWeight="600">Left Shift</text>
            <text x={width/2} y={height/2 + 13} textAnchor="middle" fill="#b45309" fontWeight="600">2-Bits</text>
        </g>
    );
}