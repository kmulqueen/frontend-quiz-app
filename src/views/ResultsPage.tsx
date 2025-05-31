import Container from "../components/Layout/Container";
import Button from "../components/Layout/Button";
import { useQuiz } from "../contexts/useQuiz";
import IconWithSection from "../components/Layout/IconWithSection";

export default function ResultsPage() {
  const { correctCount, totalQuestions, selectedSection, resetQuiz } =
    useQuiz();
  const ariaId = `${selectedSection}-quiz-results`;

  return (
    <Container
      as="section"
      aria-labelledby={ariaId}
      className="xl:flex xl:gap-36"
    >
      <div className="mb-10">
        <h1
          className="mb-2 text-preset-2-light-mobile text-blue-900 sm:text-preset-2-light dark:text-white"
          id={ariaId}
        >
          Quiz completed
        </h1>
        <h2 className="text-preset-2-medium-mobile text-blue-900 sm:text-preset-2-medium dark:text-white">
          You scored...
        </h2>
      </div>
      <div className="xl:grow">
        <div className="results-card">
          <IconWithSection section={selectedSection} />
          <h3 className="text-preset-1-mobile text-blue-900 sm:mt-10 sm:text-preset-1 dark:text-white">
            {correctCount}
          </h3>
          <p className="text-preset-4-mobile text-grey-500 sm:text-preset-5-medium dark:text-blue-300">
            out of {totalQuestions}
          </p>
        </div>
        <Button className="form-button" onClick={resetQuiz}>
          Play Again
        </Button>
      </div>
    </Container>
  );
}
