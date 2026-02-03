import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function ANDGate({ x, y, active=false }) {
    const width = 40;
    const height = 40;
    const r = height / 2;        // radius of the semicircle
    const straight = width - r;  // horizontal straight section before the arc

    return (
        <g transform={`translate(${x}, ${y})`}>
            <path
                d={`
                    M 0 0
                    H ${straight}
                    A ${r} ${r} 0 0 1 ${straight} ${height}
                    H 0
                    Z
                `}
                fill="#ffaaaa"
                stroke={getStrokeColor(active, "red")}
                strokeWidth={getStrokeWidth(active, 3, 2)}
            />
        </g>
    );
}
