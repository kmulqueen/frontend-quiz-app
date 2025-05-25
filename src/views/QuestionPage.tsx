import { useRef } from "react";
import ErrorMessage from "../components/layout/ErrorMessage";
import AnswerList from "../components/Question/AnswerList";
import QuestionProgress from "../components/Question/QuestionProgress";

type QuestionPageProps = {
  question?: string;
  questionNumber: number;
  totalQuestions: number;
  options?: string[];
  errorMessage: string;
  isLastQuestion: boolean;
  isCorrect: boolean | null;
  selectedAnswer: string;
  correctAnswer: string;
  answerSubmitted: boolean;
  handleSelectAnswer: (answer: string) => void;
  handleSubmitAnswer: (answerToSubmit?: string) => void;
  handleNextQuestion: () => void;
};

export default function QuestionPage({
  question,
  questionNumber,
  totalQuestions,
  options,
  errorMessage,
  isLastQuestion,
  isCorrect,
  selectedAnswer,
  correctAnswer,
  answerSubmitted,
  handleSelectAnswer,
  handleSubmitAnswer,
  handleNextQuestion,
}: QuestionPageProps) {
  const nextButtonRef = useRef<HTMLButtonElement>(null);

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
          handleSubmitAnswer={handleSubmitAnswer}
          isCorrect={isCorrect}
          selectedAnswer={selectedAnswer}
          correctAnswer={correctAnswer}
          answerSubmitted={answerSubmitted}
          nextButtonRef={nextButtonRef}
        />
        {!answerSubmitted ? (
          <button
            className="form-button text-preset-4-mobile mb-4 focus:opacity-50"
            onClick={() => handleSubmitAnswer()}
          >
            Submit Answer
          </button>
        ) : (
          <button
            ref={nextButtonRef}
            className="form-button text-preset-4-mobile mb-4 focus:opacity-50"
            onClick={(e) => {
              handleNextQuestion();
              (e.target as HTMLButtonElement).blur();
            }}
          >
            {isLastQuestion ? "Show Results" : "Next Question"}
          </button>
        )}
        {errorMessage !== "" && (
          <ErrorMessage>Please select an answer</ErrorMessage>
        )}
      </div>
    </main>
  );
}
