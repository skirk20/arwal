import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page15({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>UWAGA</h1>
        <p>Świetnie, Kolejne zadanie uruchomi się w punkcie 53.1829, 20.39837,Jeżeli uznacie, że we wskazanej lokalizacji zatrzymanie się będzie generowało sytuację niebezpieczną to jedźcie dalej i jeżeli zadanie będzie wymagało postoju, zatrzymajcie się w bezpiecznym miejscu. Jeżeli uznacie, że we wskazanej lokalizacji zatrzymanie się będzie generowało sytuację niebezpieczną…</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
