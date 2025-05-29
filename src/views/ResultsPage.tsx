import Container from "../components/Layout/Container";
import Button from "../components/Layout/Button";
import { useQuiz } from "../contexts/useQuiz";
import IconWithSection from "../components/Layout/IconWithSection";

export default function ResultsPage() {
  const { correctCount, totalQuestions, selectedSection, resetQuiz } =
    useQuiz();
  const ariaId = `${selectedSection}-quiz-results`;

  return (
    <Container as="section" aria-labelledby={ariaId}>
      <div className="mb-10">
        <h1
          className="text-blue-900 text-preset-2-light-mobile sm:text-preset-2-light mb-2"
          id={ariaId}
        >
          Quiz completed
        </h1>
        <h2 className="text-blue-900 text-preset-2-medium-mobile sm:text-preset-2-medium">
          You scored...
        </h2>
      </div>
      <div className="results-card">
        <IconWithSection section={selectedSection} />
        <h3 className="text-preset-1-mobile sm:text-preset-1 text-blue-900 sm:mt-10">
          {correctCount}
        </h3>
        <p className="text-preset-4-mobile sm:text-preset-5-medium text-grey-500">
          out of {totalQuestions}
        </p>
      </div>
      <Button className="form-button" onClick={resetQuiz}>
        Play Again
      </Button>
    </Container>
  );
}
