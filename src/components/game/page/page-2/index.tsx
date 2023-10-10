import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page2({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>WAZNA INFORMACJA</h1>
        <p>W schowku przed pasażerem znajduje się Wasz Antyradar RST, który pomoże wam podczas podróży. Znajdźcie go i odpowiedzcie na pierwsze pytania dzisiejszego wyzwania</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
