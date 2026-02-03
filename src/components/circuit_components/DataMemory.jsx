import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function DataMemory({ x, y, active=false }) {
    const width = 170;
    const height = 210;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#ffee99"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
            />

            {/* "Address" label */}
            <text x={width/2 - 20} y={25} textAnchor="end" dominantBaseline="middle">Address</text>
        
            {/* Component name label */}
            <text x={width/2} y={height/2 - 10} textAnchor="middle" dominantBaseline="middle">Data</text>
            <text x={width/2} y={height/2 + 10} textAnchor="middle" dominantBaseline="middle">Memory</text>

            {/* "Read Data" label */}
            <text x={width/2 + 42} y={height - 60} textAnchor="start" dominantBaseline="middle">Read</text>
            <text x={width/2 + 45} y={height - 45} textAnchor="start" dominantBaseline="middle">Data</text>

            {/* "Write Data" label */}
            <text x={width/2 - 42} y={height - 30} textAnchor="end" dominantBaseline="middle">Write</text>
            <text x={width/2 - 45} y={height - 15} textAnchor="end" dominantBaseline="middle">Data</text>
        </g>
    );
}
