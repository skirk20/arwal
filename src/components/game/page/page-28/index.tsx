import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page25({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>UWAGA</h1>
        <p>Właśnie wjechaliście na najwyższe wzniesienie Wzgórz Dylewskich i jednocześnie całej północno-wschodniej Polski. Znajdujecie się na wysokości ponad 300 metrów npm, w księdze podróży odpowiedzcie na pytania dotyczące jak Wasz samochód sprawdza się na górskich odcinkach.</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
