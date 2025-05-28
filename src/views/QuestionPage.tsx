import { useRef } from "react";
import Container from "../components/Layout/Container";
import ErrorMessage from "../components/Layout/ErrorMessage";
import AnswerForm from "../components/Question/AnswerForm";
import QuestionProgress from "../components/Question/QuestionProgress";
import Button from "../components/Layout/Button";
import ButtonWithRef from "../components/Layout/ButtonWithRef";
import { useQuiz } from "../contexts/useQuiz";

export default function QuestionPage() {
  const nextButtonRef = useRef<HTMLButtonElement>(null);
  const {
    currentQuestion,
    currentQuestionNumber,
    errorMessage,
    isLastQuestion,
    isCorrect,
    selectedAnswer,
    answerSubmitted,
    submitAnswer,
    nextQuestion,
  } = useQuiz();

  return (
    <Container
      as="section"
      aria-labelledby={`question-${currentQuestionNumber}`}
      id="main-content"
    >
      <div className="flex flex-col">
        <QuestionProgress />
        <AnswerForm nextButtonRef={nextButtonRef} />
        {!answerSubmitted ? (
          <Button
            className="form-button"
            onClick={() => submitAnswer(selectedAnswer)}
          >
            Submit Answer
          </Button>
        ) : (
          <ButtonWithRef
            ref={nextButtonRef}
            className="form-button"
            onClick={(e) => {
              nextQuestion();
              (e.target as HTMLButtonElement).blur();
            }}
          >
            {isLastQuestion ? "Show Results" : "Next Question"}
          </ButtonWithRef>
        )}
        {errorMessage !== "" && (
          <>
            <ErrorMessage>Please select an answer</ErrorMessage>
            <div aria-live="polite" aria-atomic="true" className="sr-only">
              {answerSubmitted && isCorrect !== null && (
                <span>
                  {isCorrect
                    ? "Correct answer!"
                    : `Incorrect. The correct answer was ${currentQuestion?.answer}.`}
                </span>
              )}
            </div>
          </>
        )}
      </div>
    </Container>
  );
}
