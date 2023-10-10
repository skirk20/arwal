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
        <p>Obejrzyjcie uważnie jedną z naszych wideolekcji. Dowiecie się czym jest bezpieczna odległość i jak ją w praktyce ustalić. Dzięki tej wideolekcji z łatwością odpowiecie na nasze kolejne pytanie.</p>
        <p><a href="https://vimeo.com/swiadomykierowca/bezpiecznaodleglosc?share=copy" target="_blank" className={style.wideolekcja}>https://vimeo.com/swiadomykierowca/bezpiecznaodleglosc?share=copy</a></p>
        <p>Obejrzeliście wideolekcję i jesteście gotowi do odpowiedzi na pytanie konkursowe?</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>TAK</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
