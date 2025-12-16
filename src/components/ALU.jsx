export default function ALU({ x, y, active }) {
    const width = 150;
    const height = 220;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <text x={width/2 + 45} y={height/4} textAnchor="start">is0</text>
            <text x={width/2} y={height/2} textAnchor="middle">ALU</text>
            <text x={width/2 + 30} y={height * 3/4} textAnchor="start">ALU</text>
            <text x={width/2 + 30} y={height * 3/4 + 15} textAnchor="start">result</text>
        </g>
    );
}
