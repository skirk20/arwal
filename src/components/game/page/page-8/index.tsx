import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
import Box from "../../../layout/box/box"

type Props = {
    onNext(): void
}

export default function Page8({onNext}: Props) {
    return <Box>
        <QuizQuestion id='3' onComplete={() => {}} onNext={onNext}></QuizQuestion>
    </Box>
}
