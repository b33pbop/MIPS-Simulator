export default function SignExtend({ x, y, active }) {
    const width = 100;
    const height = 80;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width="100" 
                height="80" 
                fill={active ? "#ffaaaa" : "#ffee99"} 
                stroke="black"
            />
            <text x="50" y="45" textAnchor="middle">Sign Extend</text>
        </g>
    );
}