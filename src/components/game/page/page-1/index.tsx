import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page1({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>UWAGA</h1>
        <p>Zatrzymajcie się tutaj - to miejsce gdzie zmieniacie kierowcę, przy okazji macie zadanie do zrobienia.</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
