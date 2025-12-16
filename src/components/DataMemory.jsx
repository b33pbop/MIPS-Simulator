export default function DataMemory({ x, y, active }) {
    const width = 170;
    const height = 210;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <text x={width/2} y={height/2} textAnchor="middle">Data Memory</text>
        </g>
    );
}
