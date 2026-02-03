import { CRITICAL_PATH_ANALYSIS } from '../../data/circuit_components/component-latencies';
import { ACTIVE_COLORS } from '../../utils/active-state-colors';

export default function TimingAnalysis({ instructionType, currentStage }) {
    const analysis = instructionType ? CRITICAL_PATH_ANALYSIS[instructionType] : null;
    const stages = ["IF", "ID", "EX", "MEM", "WB"];
    const currentStageIndex = stages.indexOf(currentStage);

    // Show placeholder when no instruction
    if (!analysis) {
        return (
            <div className="timing-analysis disabled">
                <h3>Critical Path Analysis</h3>
                <div className="placeholder-message">
                    Enter a valid MIPS instruction to see the critical path analysis.
                </div>
                <div className="legend">
                    <div className="legend-item">
                        <span className="color-box" style={{ backgroundColor: ACTIVE_COLORS.critical }}></span>
                        <span>Critical Path</span>
                    </div>
                    <div className="legend-item">
                        <span className="color-box" style={{ backgroundColor: ACTIVE_COLORS.nonCritical }}></span>
                        <span>Non-Critical (parallel)</span>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="timing-analysis">
            <h3>Critical Path Analysis</h3>
            
            <div className="instruction-info">
                <strong>{analysis.name}</strong>
            </div>
            
            <div className="path-description">
                <span className="label">Critical Path:</span>
                <span className="path">{analysis.description}</span>
            </div>
            
            <div className="timing-breakdown">
                <table>
                    <thead>
                        <tr>
                            <th>Stage</th>
                            <th>Critical Component(s)</th>
                        </tr>
                    </thead>
                    <tbody>
                        {analysis.stages.map((stage, index) => {
                            const isActive = stages.indexOf(stage.stage) <= currentStageIndex;
                            
                            return (
                                <tr 
                                    key={stage.stage} 
                                    className={isActive ? 'active' : ''}
                                    style={{
                                        backgroundColor: isActive ? `${ACTIVE_COLORS.critical}20` : 'transparent',
                                        fontWeight: stages[currentStageIndex] === stage.stage ? 'bold' : 'normal'
                                    }}
                                >
                                    <td>{stage.stage}</td>
                                    <td>{stage.components.join(' → ')}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
            
            <div className="legend">
                <div className="legend-item">
                    <span className="color-box" style={{ backgroundColor: ACTIVE_COLORS.critical }}></span>
                    <span>Critical Path</span>
                </div>
                <div className="legend-item">
                    <span className="color-box" style={{ backgroundColor: ACTIVE_COLORS.nonCritical }}></span>
                    <span>Non-Critical (parallel)</span>
                </div>
            </div>
        </div>
    );
}
