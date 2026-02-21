import { getStrokeColor, getStrokeWidth, isActive } from '../../utils/active-state-colors';

export default function ALUControl({ x, y, active=false }) {
    const width = 200;
    const height = 90;
    // Keep custom color when inactive, use active color when active
    const strokeColor = isActive(active) ? getStrokeColor(active) : "#7c3aed";
    const strokeWidth = isActive(active) ? getStrokeWidth(active) : 2;
    
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#f5f3ff"
                stroke={strokeColor}
                strokeWidth={strokeWidth}
                rx="15"
            />
            <text 
                x={width/2} y={height/2 - 15} 
                textAnchor="middle" 
                dominantBaseline="middle"
                style={{fontSize: "32px", fontWeight: "bold"}}
                fill="#7c3aed"
            >
                ALU
            </text>
            <text 
                x={width/2} y={height/2 + 20}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{fontSize: "32px", fontWeight: "bold"}}
                fill="#7c3aed"
            >
                Control
            </text>
        </g>
    );
}
