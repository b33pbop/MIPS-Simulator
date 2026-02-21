import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function SignExtend({ x, y, active=false }) {
    const width = 150;
    const height = 80;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#f1f5f9"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="80"
            />
            <text x={width/2} y={height/2 - 2} textAnchor="middle" fill="#475569" fontWeight="600">Sign</text>
            <text x={width/2} y={height/2 + 13} textAnchor="middle" fill="#475569" fontWeight="600">Extend</text>
        </g>
    );
}
