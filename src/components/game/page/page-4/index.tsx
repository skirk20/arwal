import { useState } from "react";
import { Popup } from "../../../../molecules/popup/popup";
import BoxTask from "../../../layout/boxTask/box"
import { ButtonsRow } from "../../../../atoms/buttons-row/buttons-row";
import { ButtonLike } from "../../../../atoms/button-like";
import styles from "../../../layout/boxTask/box.module.scss"
import carWheel from "../../../../assets/carWheel.png"

type Props = {
    onNext(): void
}

export default function Page4({ onNext }: Props) {
    const [showPopup, setShowPopup] = useState<boolean>(false);
    return <BoxTask>
        <div className={styles.mainDiv}>
            <h1>Bezpieczny kierowca</h1>
            <p>Odpowiednia pozycja za kierownicą ma wpływ na bezpieczeństwo i komfort jazdy. Zatem pomóżcie kierowcy zająć prawidłową pozycję za kierownicą i zróbcie mu instruktażowe zdjęcie (lub zdjęcia) dzięki, którym osoby, które nie wiedzą jak siedzieć prawidłowo za kierownicą dostaną czytelny fotoporadnik edukacyjny. Bądźcie kreatywni! Niech te zdjęcia wszystko wytłumaczą! Zdjęcia pokażcie na punkcie finałowym osobie prowadzącej grę.</p>
            <img src={carWheel} alt="" />
            <section className={styles.butttonLike}>
                <ButtonLike>
                    <button onClick={() => { setShowPopup(true) }}>Zakończ zadanie</button>
                </ButtonLike>
            </section>
        </div>
        {showPopup && <Popup>
            <p className={styles.popupTheme}>Czy napewno chcesz zamknąć zadanie? </p>
            <ButtonsRow className={styles.popupNav}>

                <ButtonLike><button onClick={() => { setShowPopup(false) }}>Wróć do zadania</button>
                </ButtonLike><ButtonLike><button onClick={onNext}>Zakończ</button></ButtonLike>
            </ButtonsRow>
        </Popup>
        }
    </BoxTask>
}
