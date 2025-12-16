export default function Wire({ x, y, active }) {
    return (
        <g transform={`translate(${x}, ${y})`}>
            <line x1="0" y1="40"></line>
        </g>
    );
}