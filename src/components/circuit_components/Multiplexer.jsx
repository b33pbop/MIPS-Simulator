import { getStrokeColor, getStrokeWidth } from '../../utils/active-state-colors';

export default function Multiplexer({ x, y, active=false }) {
    const width = 40;
    const height = 120;
    
    const labelStyle = {
        textAnchor: "middle",
        dominantBaseline: "middle",
        fontSize: "25px",
        fontWeight: "bold",
        fill: "#32641A",
        writingMode: "vertical-rl",
        textOrientation: "upright",
    }

    return (
        <g transform={`translate(${x}, ${y})`}>
            <rect 
                width={width}
                height={height}
                fill="#F2F2F2"
                stroke={getStrokeColor(active)}
                strokeWidth={getStrokeWidth(active)}
                rx="8"
            />
            <text 
                x={width/2} y={height/2}
                style={labelStyle}
            >
                MUX
            </text>

        </g>
    );
}