import Box from "../../../../components/layout/box/box"
import style from "../../../../components/layout/box/box.module.scss"
import { ButtonLike } from "../../../../atoms/button-like"
type Props = {
    onNext(): void
}

export default function Page9({onNext}: Props) {
    return <Box>
        <div className={style.mainDiv}>
        <h1>UWAGA</h1>
        <p>Przejechaliście prawie 60 km drogą wojewódzką, jak wam się jechało tym samochodem? Pytania dotyczące jazdy znajdziecie w księdze podróży, która znajduje się w schowku przed pasażerem</p>
        <section>
        <ButtonLike>
                <button onClick={onNext}>DALEJ</button>
        </ButtonLike>
        </section>
        </div>
    </Box>
}
