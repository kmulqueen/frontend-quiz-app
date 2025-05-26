import iconBgColor from "../utils/icon-bgcolor";
import Button from "../components/layout/Button";

type ResultsPageProps = {
  correctCount: number;
  questionCount: number;
  section?: string;
  icon?: string | null;
  handleResetQuiz: () => void;
};

export default function ResultsPage({
  correctCount,
  questionCount,
  section,
  icon,
  handleResetQuiz,
}: ResultsPageProps) {
  const bgColorClassName: string = iconBgColor(section);

  return (
    <>
      <div className="mb-10">
        <h1 className="text-blue-900 text-preset-2-light-mobile mb-2">
          Quiz completed
        </h1>
        <h2 className="text-blue-900 text-preset-2-medium-mobile">
          You scored...
        </h2>
      </div>
      <div className="bg-white rounded-xl p-8 flex flex-col gap-4 items-center mb-4">
        <div className="flex justify-center items-center gap-4">
          <div className={`${bgColorClassName} rounded-lg p-2`}>
            {icon && <img src={icon} alt={`Icon for ${section} section.`} />}
          </div>
          <h2 className="text-preset-4-mobile text-blue-900">{section}</h2>
        </div>
        <h3 className="text-preset-1-mobile text-blue-900">{correctCount}</h3>
        <p className="text-preset-4-mobile text-grey-500">
          out of {questionCount}
        </p>
      </div>
      <Button className="form-button" onClick={handleResetQuiz}>
        Play Again
      </Button>
    </>
  );
}
