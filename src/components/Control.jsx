export default function Control({ x, y, active }) {
    const width = 100;
    const height = 190;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="red"
                rx="15"
            />
            <text x={width/2} y={height/2} textAnchor="middle" dominantBaseline="middle">Control</text>
        </g>
    );
}