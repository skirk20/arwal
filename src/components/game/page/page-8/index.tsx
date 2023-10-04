import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page8({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>BRAWO</h1>
        <p>Kolejne zadanie uruchomi się w punkcie 52.67982, 20.36775</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
