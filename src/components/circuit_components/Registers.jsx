export default function Registers({ x, y, active=false }) {
    const width = 150;
    const height = 250;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#ffee99"
                stroke={active ? "blue" : "black"}
                strokeWidth={active ? 3 : 1}
            />
            <text x="35" y={height * (1/6)} textAnchor="end">RR1</text>
            <text x={width - 35} y={height * (1/6)} textAnchor="start">RD1</text>
            <text x="35" y={height * (2/6) - 10} textAnchor="end">RR2</text>
            <text x={width/2} y={height/2 - 10} textAnchor="middle" dominantBaseline="middle">Registers</text>
            <text x="35" y={height * (4/6) - 10} textAnchor="end">WR</text>
            <text x={width - 35} y={height * (5/6) - 10} textAnchor="start">RD2</text>
            <text x="35" y={height - 10} textAnchor="end">WD</text>
        </g>
    );
}