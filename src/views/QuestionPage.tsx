import AnswerList from "../components/Question/AnswerList";
import QuestionProgress from "../components/Question/QuestionProgress";

type QuestionPageProps = {
  question?: string;
  questionNumber: number;
  totalQuestions: number;
  options?: string[];
  errorMessage: string;
  isLastQuestion: boolean;
  handleSelectAnswer: (answer: string) => void;
  handleSubmitAnswer: () => void;
  handleNextQuestion: () => void;
};

export default function QuestionPage({
  question,
  questionNumber,
  totalQuestions,
  options,
  errorMessage,
  isLastQuestion,
  handleSelectAnswer,
  handleSubmitAnswer,
  handleNextQuestion,
}: QuestionPageProps) {
  return (
    <main className="px-6 py-8">
      <div className="flex flex-col">
        <QuestionProgress
          question={question}
          questionNumber={questionNumber}
          totalQuestions={totalQuestions}
        />
        <AnswerList
          options={options ?? []}
          handleSelectAnswer={handleSelectAnswer}
        />
        <button
          className="form-button text-preset-4-mobile mb-4"
          onClick={() => handleSubmitAnswer()}
        >
          Submit Answer
        </button>

        <button
          className="form-button text-preset-4-mobile mb-4"
          onClick={handleNextQuestion}
        >
          {isLastQuestion ? "Show Results" : "Next Question"}
        </button>
        {errorMessage !== "" && (
          <div className="flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="none"
              viewBox="0 0 40 40"
            >
              <path
                fill="#EE5454"
                d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
              />
            </svg>
            <p className="text-red-500 text-preset-4-mobile">
              Please select an answer
            </p>
          </div>
        )}
      </div>
    </main>
  );
}
