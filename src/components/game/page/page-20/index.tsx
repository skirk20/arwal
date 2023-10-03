import { ButtonLike } from "../../../../atoms/button-like"
import Box from "../../../layout/box/box"
import style from "../../../layout/box/box.module.scss"
type Props = {
    onNext(): void
}

export default function Page20({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
            <h1>
                UWAGA
            </h1>
            <p>
            Wjechaliście na tereny dawnego Państwa krzyżackiego. Przed Wami zamek, który stanowił umocnienia na pograniczu mazowiecko-pruskim. Został on zbudowany w XIV wieku i wtedy też powstało miasto. Zatrzymajcie się tutaj, tutaj kolejna osoba wsiada za kółko.
            </p>
            <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
