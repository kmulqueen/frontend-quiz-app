import AnswerList from "../components/Question/AnswerList";

type QuestionPageProps = {
  question?: string;
  questionNumber: number;
  totalQuestions: number;
  options?: string[];
};

export default function QuestionPage({
  question,
  questionNumber,
  totalQuestions,
  options,
}: QuestionPageProps) {
  return (
    <main className="px-6 py-8">
      <div className="flex flex-col">
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
        <AnswerList options={options ?? []} />
        <button className="form-button text-preset-4-mobile">
          Submit Answer
        </button>
      </div>
    </main>
  );
}
