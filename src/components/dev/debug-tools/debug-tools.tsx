import { useRef } from "react";
import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch} from "../../../modules/game";
import useGameStep from "../../../modules/game/hooks/use-game-step";
import useScenario from "../../../modules/game/hooks/use-scenario";
import { GameStep, GAME_STEP_TYPE } from "../../../modules/game/types";
import styles from './debug-tools.module.scss';
import { useGameState } from "../../../modules/game/hooks/use-game-state";

export default function DebugTools() {

    const dispatch = useGameModuleDispatch();
    const gotoSelectRef = useRef<HTMLSelectElement>(null);
    const scenario = useScenario();
    const { completedSteps } = useGameState();

    const onReset = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        })
    }, [dispatch]);

    const goto = useCallback(() => {
        if (gotoSelectRef.current) {
            const value = gotoSelectRef.current.value;

            dispatch({
                type: GAME_MODULE_ACTION.SET_GAME_STEP,
                payload: {
                    id: value
                }
            })
        }
    }, [dispatch]);

    const step = useGameStep();

    return <div className={styles.debugTools}>
        <h3>Game testing tools:</h3>
        <div>
            <h4>Aktuany stan gry:</h4>
            <div>
                Aktualny krok gry: <strong>[{step?.id}] - {getStepName(step)}</strong>
            </div>
            <div>
                Znalezione punkty geo: <strong>{completedSteps.join(', ')}</strong>
            </div>
        </div>
        <div>
            <h4>Sterowanie grą:</h4>
            <div>
                Przejdź do kroku gry: <select ref={gotoSelectRef}>
                    {
                        scenario.steps.map((s) => {
                            return <option key={s.id} value={s.id}>
                                [{s.id}] - {getStepName(s)}
                            </option>
                        })
                    }
                </select> <button onClick={goto}>Przejdź</button>
            </div>
        </div>
        <div>
            Zresetuj grę: <button onClick={onReset}>Reset gry</button>
        </div>
    </div>
}

function getStepName(step?: GameStep) {
    switch (step?.type) {
        case GAME_STEP_TYPE.PAGE:
            return `(${step.pageId})`;

        case GAME_STEP_TYPE.TASK:
            return `(${step.taskId})`;

        case GAME_STEP_TYPE.GEO_STEP:
            return `(${step.name})`;

        case GAME_STEP_TYPE.MULTI_GEO_STEP:
            return `MultiGeo: (${step.stepsId.join(', ')})`;

        default:
            return 'nieznanyh krok'

    }
}
