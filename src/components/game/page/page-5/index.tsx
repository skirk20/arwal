import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page5({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>UWAGA</h1>
        <p>Ponieważ oceniamy dzisiaj nie tylko wiedzę ale też umiejętność jazdy ekologicznej to ...mamy nadzieję, że dotychczasowe zadania wykonywaliście przy wyłączonym silniku</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
