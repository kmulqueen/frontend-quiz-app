import { useQuiz } from "../../contexts/useQuiz";

export default function QuestionProgress() {
  const { currentQuestion, currentQuestionNumber, totalQuestions } = useQuiz();
  return (
    <>
      <p className="text-preset-5-mobile text-grey-500 mb-4">
        {`Question ${currentQuestionNumber} of ${totalQuestions}`}
      </p>
      <p className="text-preset-3-mobile text-blue-900 mb-6">
        {currentQuestion?.question}
      </p>
      <label htmlFor="quiz-progress" className="sr-only">
        Quiz progress:
      </label>
      <progress
        id="quiz-progress"
        max={totalQuestions}
        value={currentQuestionNumber}
        className="mb-10"
      >
        {`${Math.round((currentQuestionNumber / totalQuestions) * 100)}%`}
      </progress>
    </>
  );
}
