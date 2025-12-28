export default function PC({ x, y, active=false }) {
    const width = 60;
    const height = 100;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#DADEE3"
                stroke={active ? "blue" : "black"}
                strokeWidth={active ? 3 : 1}
            />
            <text x={width/2} y={height/2} textAnchor="middle">PC</text>
        </g>
    );
}
