import Box from "../../components/layout/boxTask/box";
import { QuizQuestion } from "../../modules/game/questions/quiz-questions";
import style from "./style.module.scss"
export default function QuizOne(){
    return <Box>
        <div className={style.mainDiv}>
        <QuizQuestion id="13" showPopup = {false}/>
        </div>
    </Box>
}