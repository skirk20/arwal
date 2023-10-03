import Box from "../../../../components/layout/box/box"
import { QuizQuestion } from "../../../../modules/game/questions/quiz-questions"

type Props = {
    onNext(): void
}

export default function Page2({onNext}: Props) {
    return <Box>
        <QuizQuestion id='3' onComplete={() => {}} onNext={onNext}></QuizQuestion>
        
    </Box>
}
