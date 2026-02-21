import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function PC({ x, y, active=false }) {
    const width = 60;
    const height = 100;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#e0f2fe"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="4"
            />
            <text x={width/2} y={height/2} textAnchor="middle" fill="#0369a1" fontWeight="600">PC</text>
        </g>
    );
}
