import DATA from "../../data.json";
import Button from "../Layout/Button";
import { useQuiz } from "../../contexts/useQuiz";
import IconWithSection from "../Layout/IconWithSection";

type StartMenuItemProps = {
  section: string;
};

export default function StartMenuItem({ section }: StartMenuItemProps) {
  const { startQuiz } = useQuiz();

  const questions =
    DATA.quizzes.find((quiz) => quiz.title === section)?.questions ?? [];

  return (
    <Button
      className="option-item option-shadow"
      onClick={() => startQuiz(section, questions)}
    >
      <IconWithSection section={section} />
    </Button>
  );
}
