import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page12({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>Nie możemy doczekać się zdjęć!.</h1>
        <p>Zapraszamy za kierownicę nowego kierowcę, który mamy nadzieję jeszcze bardziej Wam zmniejszy spalanie lub zużycie energii elektrycznej. Ruszajcie dalej, kolejne zadanie uruchomi sie w punkcie 52.825250, 20.261369, Jeżeli uznacie, że we wskazanej lokalizacji zatrzymanie się będzie generowało sytuację niebezpieczną to jedźcie dalej i jeżeli zadanie będzie wymagało postoju, zatrzymajcie się w bezpiecznym miejscu.</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
