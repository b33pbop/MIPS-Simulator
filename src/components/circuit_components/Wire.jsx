export default function Wire({ points, arrowEnd=false, label=false, isDatapath=true, active=false }) {
    const pointsStr = points.map(p => `${p.x},${p.y}`).join(" ");
    const stroke = active ? "blue" : (isDatapath ? "black" : "red")

    return (
        <>
            <polyline
                points={pointsStr}
                fill="none"
                stroke={stroke}
                strokeWidth={active ? 3 : 2}
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