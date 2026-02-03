import { getStrokeColor, getStrokeWidth, isActive } from '../../utils/active-state-colors';

export default function Control({ x, y, active=false }) {
    const width = 100;
    const height = 190;
    // Keep custom color when inactive, use active color when active
    const strokeColor = isActive(active) ? getStrokeColor(active) : "#9D5343";
    const strokeWidth = isActive(active) ? getStrokeWidth(active) : 3;
    
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#F0DED9"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                rx="15"
            />
            <text 
                x={width/2} y={height/2 + 5} 
                textAnchor="middle" 
                dominantBaseline="middle"
                transform={`rotate(90 ${width / 2} ${height / 2})`}
                style={{
                    fontSize: "40px",
                    fontWeight: "bold"
                }}
                fill="#A92418"
            >
                Control
            </text>
        </g>
    );
}
