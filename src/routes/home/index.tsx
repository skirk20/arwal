import { getRulesPageRoute, getGamePageRoute } from "../routes";
import styles from './homePageView.module.scss';
import useGameStarted from "../../modules/game/hooks/use-game-started";
import { useCallback } from "react";
import { GAME_MODULE_ACTION, useGameModuleDispatch } from "../../modules/game";
import { ButtonLike } from "../../atoms/button-like";
import { Link } from "react-router-dom";
import { PageFooter } from "../../components/layout/footer/page-footer";

export default function HomePage() {

    const gameStarted = useGameStarted();
    const dispatch = useGameModuleDispatch();

    const onGameRestart = useCallback(() => {
        dispatch({
            type: GAME_MODULE_ACTION.RESET_GAME
        });
    }, [dispatch]);

    return <div className={styles.homePageView}>
        <div className={styles.pageHeader}>
            <h1 className={styles.headerTitle}> Arval Drive and Learn</h1>
            {/* <p>Terenowe Mistrzostwa Świadomych Kierowców.</p> */}
        </div>

        <div className={styles.content}>
            <h2>Witajcie!</h2>
            <p className={styles.contentText}>Witajcie na grze przejazdowej ARVAL Drive and Lern. <br />
                Jedziecie z Zegrza do Ostródy. Po drodze będziecie mieć do wykonania 8 zadań.< br />
                Ważna porada, dająca niesprawiedliwą przewagę! Czytajcie to co jest napisane w aplikacji na głos,<b> ze zrozumieniem,</b> powoli. Słowa mają znaczenie, a niektóre pytania mogą być podchwytliwe.
            </p>
        </div>
        <nav>
            {!gameStarted && <ButtonLike>
                <Link to={getRulesPageRoute()}>Gra mobilna</Link>
            </ButtonLike>
            }
            {gameStarted && <ButtonLike>
                <Link className="button" to={getGamePageRoute()}>Kontynuuj grę</Link>
            </ButtonLike>
            }

            {gameStarted &&
                <ButtonLike>
                    <Link className="button" to={getRulesPageRoute()} onClick={onGameRestart}>Zrestartuj grę</Link>
                </ButtonLike>
            }
        </nav>
        <p className={styles.errorMessege}>Proszę obrócić urządzenie</p>
        {/* <PageFooter /> */}
    </div>
}
