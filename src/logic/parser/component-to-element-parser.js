import { circuitComponentIds } from "../../data/circuit_components/circuit-component-ids";
import { datapathWireCoordinates } from "../../data/wires/datapath-wire";
import { controlPathWireCoordinates } from "../../data/wires/control-path-wire";

export default function componentsToElementParser() {
    const datapathWireIds = datapathWireCoordinates.map(wire => wire.id);
    const controlPathWireIds = controlPathWireCoordinates.map(wire => wire.id);
    const allIds = [...circuitComponentIds, ...datapathWireIds, ...controlPathWireIds];

    const initialActiveElements = allIds.reduce((acc, id) => {
        acc[id] = false;
        return acc;
    }, {});

    return initialActiveElements;
}
