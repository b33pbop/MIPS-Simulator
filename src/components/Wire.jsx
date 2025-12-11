export default function Wire({ x, y, active }) {
    const width = 100;
    const height = 80;
    return (
        <g transform={`translate(${x}, ${y})`}>
            <line x1="0" y1="40"></line>
        </g>
    );
}