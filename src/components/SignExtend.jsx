export default function SignExtend({ x, y, active }) {
    const width = 150;
    const height = 80;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#F2F2F2"
                stroke="black"
                strokeWidth={3}
                rx="80"
            />
            <text x={width/2} y={height/2 - 2} textAnchor="middle">Sign</text>
            <text x={width/2} y={height/2 + 13} textAnchor="middle">Extend</text>
        </g>
    );
}
