import Box from "../../../../components/layout/boxTask/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"
type Props = {
    onNext(): void
}

export default function Page3({onNext}: Props) {
    return <Box>
    <QuizQuestion id='1' onComplete={() => {}} onNext={onNext}></QuizQuestion>
</Box>
}
