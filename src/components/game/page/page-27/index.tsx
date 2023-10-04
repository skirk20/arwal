import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page27({ onNext }: Props) {
    return <Box>
        <div className={style.mainDiv}>
            <h1>Świetnie!</h1>
            <p>W takim razie jedźcie dalej i przedyskutujcie czy utrzymywana przez Was odległość od pojazdu przed Wami jest bezpieczną odległością przy Waszej prędkości? Czy inni kierowcy utrzymują bezpieczne odległości?
                Waszym kolejnym punktem jest: 53.54819, 19.93384 ; przez ten punkt przejeżdżacie, chyba że macie dużo czasu to warto się zatrzymać</p>
            <section>
                <ButtonLike>
                    <button onClick={onNext}>DALEJ</button>
                </ButtonLike>
            </section>
        </div>
    </Box>
}
