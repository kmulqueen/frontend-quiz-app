import { useRef } from "react";
import Container from "../components/layout/Container";
import ErrorMessage from "../components/layout/ErrorMessage";
import AnswerList from "../components/Question/AnswerList";
import QuestionProgress from "../components/Question/QuestionProgress";
import Button from "../components/layout/Button";
import ButtonWithRef from "../components/layout/ButtonWithRef";

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
    <Container as="section" aria-labelledby={`question-${questionNumber}`}>
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
          <Button className="form-button" onClick={() => handleSubmitAnswer()}>
            Submit Answer
          </Button>
        ) : (
          <ButtonWithRef
            ref={nextButtonRef}
            className="form-button"
            onClick={(e) => {
              handleNextQuestion();
              (e.target as HTMLButtonElement).blur();
            }}
          >
            {isLastQuestion ? "Show Results" : "Next Question"}
          </ButtonWithRef>
        )}
        {errorMessage !== "" && (
          <ErrorMessage>Please select an answer</ErrorMessage>
        )}
      </div>
    </Container>
  );
}
