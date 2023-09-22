import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page18({onNext}: Props) {
    return <Box>
        <QuizQuestion id='8' onComplete={() => {}} onNext={onNext}></QuizQuestion>
    </Box>
}
