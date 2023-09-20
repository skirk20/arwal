import { GAME_STEP_TYPE } from "../types";
import useGameStep from "./use-game-step";

/**
 * Zwraca krok gry o podanym ID jeżeli jest to krok typu `GAME_STEP_TYPE.GEO_STEP`
 */
export default function useGeoStep(id: string) {
     const step = useGameStep(id);

     return step?.type === GAME_STEP_TYPE.GEO_STEP ? step : null;
}
