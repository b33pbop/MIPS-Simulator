export default function Decoder({ x, y, active=false }) {
    const width = 50;
    const height = 600;
    const numSections = 6;
    const sectionHeight = height / numSections;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height} 
                fill="#ffee99" 
                stroke={active ? "blue" : "black"}
                strokeWidth={active ? 3 : 1}
            />
            {[...Array(numSections)].map((_, i) => (
                <line
                    key={i}
                    x1={0}
                    y1={(i + 1) * sectionHeight}
                    x2={width}
                    y2={(i + 1) * sectionHeight}
                    stroke="black"
                    strokeWidth={1}
                />
            ))}
        </g>
    );
}