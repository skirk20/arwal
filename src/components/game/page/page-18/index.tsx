import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page18({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>SUPER</h1>
        <p>Jedzcie teraz 53.23473, 20.18195, zatrzymajcie się, posilcie i wykonajcie zadanie.</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
