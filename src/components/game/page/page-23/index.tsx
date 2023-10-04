import style from "../../../layout/box/box.module.scss"
import Box from "../../../layout/box/box"
import { ButtonLike } from "../../../../atoms/button-like"

type Props = {
    onNext(): void
}

export default function Page23({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
            <h1>
                UWAGA
            </h1>
            <p>
            Witajcie w Dąbrównie - mieście dwóch jezior - bardzo polecamy zwrócenie uwagi na położenie miejscowości. Jest to też miejscowość która mimo swojej wielkości posiada aż 3 świątynie. Synagogę, kościół ewangelicki i kościół katolicki, przed którym się znajdujecie. W nim Władysław Jagiełło uczestniczył w mszy na dzień przed Bitwą pod Grunwaldem.
            </p>
            <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
