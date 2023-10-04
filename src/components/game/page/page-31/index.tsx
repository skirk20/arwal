import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page25({ onNext }: Props) {
    return <Box>
        <div className={style.mainDiv}>
            <h1>UWAGA</h1>
            <p>A teraz zapraszam, Was do punktu finałowego
                53.70745, 19.94435</p>
            <section>
                <ButtonLike>
                    <button onClick={onNext}>DALEJ</button>
                </ButtonLike>
            </section>
        </div>
    </Box>
}
