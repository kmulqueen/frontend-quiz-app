type QuestionProgressProps = {
  questionNumber: number;
  totalQuestions: number;
  question?: string;
};

export default function QuestionProgress({
  questionNumber,
  totalQuestions,
  question,
}: QuestionProgressProps) {
  return (
    <>
      <p className="text-preset-5-mobile text-grey-500 mb-4">
        {`Question ${questionNumber} of ${totalQuestions}`}
      </p>
      <p className="text-preset-3-mobile text-blue-900 mb-6">{question}</p>
      <label htmlFor="quiz-progress" className="sr-only">
        Quiz progress:
      </label>
      <progress
        id="quiz-progress"
        max={totalQuestions}
        value={questionNumber}
        className="mb-10"
      >
        {`${questionNumber * totalQuestions}%`}
      </progress>
    </>
  );
}
