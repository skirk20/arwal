import { Link } from "react-router-dom";
import Box from "../../components/layout/box/box";
import styles from './rules.module.scss';
import { ButtonsRow } from "../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../atoms/button-like";
import { getRide } from "../routes";


export default function RulesPage() {

    

    return <div className={styles.rulesPageView}><Box>
        <div className={styles.rules}>
            <h2 >Zasady Gry</h2>
        </div>
        <ol>
            <li>Przed Wami 8 zadań</li>
            <li>Każde zadanie poprzedza pytanie quizowe</li>
            <li>Zdobywacie punkty za: 
                <ul>
                    <li>poprawne odpowiedzi na pytania quizowe</li>
                    <li>poprawne wykonanie zadań</li>
                    <li>ekonomiczną i bezpieczną jazdę - będziemy porównywać Wasze spalanie w stosunku do danych producenta.</li>
                </ul>
            </li>
            <li>Na przejście gry macie 3,5 godziny - po upływie tego czasu kierujcie się od razu do punktu finałowego, nawet jeśli nie udało Wam się ukończyć wszystkich zadań.</li>
            <li>Gra opiera się na geolokalizacji - aby wyświetlić zadanie musicie znaleźć się w jego pobliżu. Cześć punktów wymaga od Was zatrzymanie się w wyznaczonym miejscu, część odpali się jak przejedziecie przez wskazane współrzędne.</li>
        </ol>

        <ButtonsRow as="nav" align="center" className={styles.buttons} >
            <ButtonLike>
                <Link className="button" to={getRide()}>Dalej</Link>
            </ButtonLike>
        </ButtonsRow>


        {/* {showGPSInfo && <Popup onOKClick={goToGame}>
            <p>
                Dostęp do lokalizacji urządzenia jest niezbędny do przeprowadzenia gry. Udziel dostępu, jeśli zostaniesz o to poproszony.
            </p>
        </Popup>} */}
    </Box>
    </div>

}
