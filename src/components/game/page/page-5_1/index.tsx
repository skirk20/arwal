import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page5({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>A teraz w drogę!</h1>
        <p>Kolejne zadanie uruchomi się po przejechaniu przez punkt 52.65654152276354, 20.628665850188753.</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
