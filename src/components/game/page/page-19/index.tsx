import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page19({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>Działdowo</h1>
        <p>Wjechaliście na tereny dawnego Państwa krzyżackiego. Przed Wami zamek, który stanowił umocnienia na pograniczu mazowiecko-pruskim. Został on zbudowany w XIV wieku i wtedy też powstało miasto.</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
