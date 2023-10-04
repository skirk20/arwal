import style from "../../../layout/box/box.module.scss"
import Box from "../../../layout/box/box"
import { ButtonLike } from "../../../../atoms/button-like"

type Props = {
    onNext(): void
}

export default function Page22({ onNext }: Props) {
    return <Box>
        <div className={style.mainDiv}>
            <h1>
                UWAGA
            </h1>
            <p>
            Mam nadzieję, że nie będziecie musieli korzystać ze zdobytej teraz wiedzy. 
Nowy kierowca wsiada za kierownicę.Jedźcie tu 53.4348, 20.03425, zadanie odpali się po przejechaniu przez punkt. Nie musicie się zatrzymywać
            </p>
            <section>
                <ButtonLike>
                    <button onClick={onNext}>DALEJ</button>
                </ButtonLike>
            </section>
        </div>
    </Box>
}
