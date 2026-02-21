import { getStrokeColor, isActive } from '../../utils/active-state-colors';

export default function Wire({ points, arrowEnd=false, label=false, isDatapath=true, active=false }) {
    const pointsStr = points.map(p => `${p.x},${p.y}`).join(" ");
    
    // Determine stroke color based on active state (critical=blue, nonCritical=orange)
    // Control path uses purple to distinguish from data paths
    const defaultColor = isDatapath ? "#64748b" : "#7c3aed";
    const stroke = getStrokeColor(active, defaultColor);
    const activeState = isActive(active);

    return (
        <>
            <polyline
                points={pointsStr}
                fill="none"
                stroke={stroke}
                strokeWidth={activeState ? 3 : 2}
                strokeLinecap="round"
                markerEnd={arrowEnd ? "url(#arrowhead)" : null}
            />

            {/* {label && (
                <text
                    x={points[label.at].x + (label.dx ?? 0)}
                    y={points[label.at].y + (label.dy ?? 0)}
                    fontSize="12"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="black"
                >
                    {label.text}
                </text>
            )} */}
        </>
    );
}