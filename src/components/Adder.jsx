export default function Adder({ x, y, active }) {
    const width = 80;
    const height = 60;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <text x={width/2} y={height/2} textAnchor="middle">Add</text>
        </g>
    );
}
