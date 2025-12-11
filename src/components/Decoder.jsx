export default function Decoder({ x, y, active }) {
    const width = 50;
    const height = 600;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <line x1={width/2} y1="0" x2={width/2} y2={height} stroke="black" strokeDasharray="5,5" />
        </g>
    );
}