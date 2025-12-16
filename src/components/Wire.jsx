export default function Wire({ points, active=false, arrowEnd=false }) {
    const pointsStr = points.map(p => `${p.x},${p.y}`).join(" ");

    return (
        <polyline
            points={pointsStr}
            fill="none"
            stroke={active ? "red" : "black"}
            strokeWidth={2}
            strokeLinecap="round"
            marker-end={arrowEnd ? "url(#arrowhead)" : null}
        />
    );
}