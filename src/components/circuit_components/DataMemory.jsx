import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function DataMemory({ x, y, active=false }) {
    const width = 170;
    const height = 210;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#ecfdf5"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="4"
            />

            {/* "Address" label */}
            <text x={width/2 - 20} y={25} textAnchor="end" dominantBaseline="middle" fill="#475569" fontSize="12">Address</text>
        
            {/* Component name label */}
            <text x={width/2} y={height/2 - 10} textAnchor="middle" dominantBaseline="middle" fill="#047857" fontWeight="600" fontSize="14">Data</text>
            <text x={width/2} y={height/2 + 10} textAnchor="middle" dominantBaseline="middle" fill="#047857" fontWeight="600" fontSize="14">Memory</text>

            {/* "Read Data" label */}
            <text x={width/2 + 42} y={height - 60} textAnchor="start" dominantBaseline="middle" fill="#475569" fontSize="11">Read</text>
            <text x={width/2 + 45} y={height - 45} textAnchor="start" dominantBaseline="middle" fill="#475569" fontSize="11">Data</text>

            {/* "Write Data" label */}
            <text x={width/2 - 42} y={height - 30} textAnchor="end" dominantBaseline="middle" fill="#475569" fontSize="11">Write</text>
            <text x={width/2 - 45} y={height - 15} textAnchor="end" dominantBaseline="middle" fill="#475569" fontSize="11">Data</text>
        </g>
    );
}
