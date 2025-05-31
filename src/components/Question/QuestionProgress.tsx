import Container from "../Layout/Container";
import { useQuiz } from "../../contexts/useQuiz";

export default function QuestionProgress() {
  const {
    currentQuestion,
    currentQuestionNumber,
    totalQuestions,
    errorMessage,
  } = useQuiz();
  const progressBarPosition = errorMessage ? "xl:mb-[11.75rem]" : "xl:mb-30";
  return (
    <Container className="flex flex-col">
      <p className="mb-4 text-preset-5-mobile text-grey-500 sm:text-preset-6 xl:mb-6 dark:text-blue-300">
        {`Question ${currentQuestionNumber} of ${totalQuestions}`}
      </p>
      <p className="mb-6 text-preset-3-mobile text-blue-900 sm:text-preset-3 dark:text-white">
        {currentQuestion?.question}
      </p>
      <label htmlFor="quiz-progress" className="sr-only">
        Quiz progress:
      </label>
      <progress
        id="quiz-progress"
        max={totalQuestions}
        value={currentQuestionNumber}
        className={`mb-10 w-full xl:mt-auto ${progressBarPosition}`}
      >
        {`${Math.round((currentQuestionNumber / totalQuestions) * 100)}%`}
      </progress>
    </Container>
  );
}
