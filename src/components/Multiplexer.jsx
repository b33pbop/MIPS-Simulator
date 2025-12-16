export default function Multiplexer({ x, y, active }) {
    const width = 40;
    const height = 120;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <text x={width/2} y={height/2 - 20} textAnchor="middle">M</text>
            <text x={width/2} y={height/2 + 5} textAnchor="middle">U</text>
            <text x={width/2} y={height/2 + 30} textAnchor="middle">X</text>
        </g>
    );
}