import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function Registers({ x, y, active=false }) {
    const width = 150;
    const height = 250;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#fef3c7"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="4"
            />
            <text x="35" y={height * (1/6)} textAnchor="end" fill="#475569" fontSize="11">RR1</text>
            <text x={width - 35} y={height * (1/6)} textAnchor="start" fill="#475569" fontSize="11">RD1</text>
            <text x="35" y={height * (2/6) - 10} textAnchor="end" fill="#475569" fontSize="11">RR2</text>
            <text x={width/2} y={height/2 - 10} textAnchor="middle" dominantBaseline="middle" fill="#b45309" fontWeight="600" fontSize="14">Registers</text>
            <text x="35" y={height * (4/6) - 10} textAnchor="end" fill="#475569" fontSize="11">WR</text>
            <text x={width - 35} y={height * (5/6) - 10} textAnchor="start" fill="#475569" fontSize="11">RD2</text>
            <text x="35" y={height - 10} textAnchor="end" fill="#475569" fontSize="11">WD</text>
        </g>
    );
}