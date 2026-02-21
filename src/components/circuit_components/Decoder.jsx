import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function Decoder({ x, y, active=false }) {
    const width = 50;
    const height = 600;
    const numSections = 6;
    const sectionHeight = height / numSections;
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
            {[...Array(numSections)].map((_, i) => (
                <line
                    key={i}
                    x1={0}
                    y1={(i + 1) * sectionHeight}
                    x2={width}
                    y2={(i + 1) * sectionHeight}
                    stroke="#d97706"
                    strokeWidth={1}
                />
            ))}
        </g>
    );
}