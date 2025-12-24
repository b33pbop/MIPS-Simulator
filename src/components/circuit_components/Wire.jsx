export default function Wire({ points, arrowEnd=false, label=false, isDatapath=true }) {
    const pointsStr = points.map(p => `${p.x},${p.y}`).join(" ");

    return (
        <>
            <polyline
                points={pointsStr}
                fill="none"
                stroke={isDatapath ? "black" : "red"}
                strokeWidth={2}
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