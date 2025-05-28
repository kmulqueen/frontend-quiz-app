import iconBgColor from "../utils/icon-bgcolor";
import { getIcon } from "../utils/get-icon";
import Container from "../components/Layout/Container";
import Button from "../components/Layout/Button";
import { useQuiz } from "../contexts/useQuiz";

export default function ResultsPage() {
  const { correctCount, totalQuestions, selectedSection, resetQuiz } =
    useQuiz();
  const icon = getIcon(selectedSection);
  const bgColorClassName: string = iconBgColor(selectedSection);
  const ariaId = `${selectedSection}-quiz-results`;

  return (
    <Container as="section" aria-labelledby={ariaId}>
      <div className="mb-10">
        <h1
          className="text-blue-900 text-preset-2-light-mobile mb-2"
          id={ariaId}
        >
          Quiz completed
        </h1>
        <h2 className="text-blue-900 text-preset-2-medium-mobile">
          You scored...
        </h2>
      </div>
      <div className="bg-white rounded-xl p-8 flex flex-col gap-4 items-center mb-4">
        <div className="flex justify-center items-center gap-4">
          <div className={`${bgColorClassName} rounded-lg p-2`}>
            {icon && (
              <img src={icon} alt={`Icon for ${selectedSection} section.`} />
            )}
          </div>
          <h2 className="text-preset-4-mobile text-blue-900">
            {selectedSection}
          </h2>
        </div>
        <h3 className="text-preset-1-mobile text-blue-900">{correctCount}</h3>
        <p className="text-preset-4-mobile text-grey-500">
          out of {totalQuestions}
        </p>
      </div>
      <Button className="form-button" onClick={resetQuiz}>
        Play Again
      </Button>
    </Container>
  );
}
