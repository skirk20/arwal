import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>WAŻNA INFORMACJA</h1>
        <p>Zależy nam na Waszym bezpieczeństwie oraz nie chcemy aby kierowca podczas dzisiejszej gry dostał mandat i punkty karne. Dlatego wyposażyliśmy wszystkie samochody w ANTYRADARY RST. Jedyny, z którego można legalnie korzystać w Polsce 😉 Zachęcamy Was do korzystania z Antyradaru RST podczas dzisiejszej jazdy!</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
