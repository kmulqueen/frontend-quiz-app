import DATA from "../../data.json";
import { iconBgColor } from "../../utils/icon-bgcolor";
import Icon from "../Layout/Icon";
import Button from "../Layout/Button";
import { getIcon } from "../../utils/get-icon";
import { useQuiz } from "../../contexts/useQuiz";

type StartMenuItemProps = {
  section: string;
};

export default function StartMenuItem({ section }: StartMenuItemProps) {
  const { startQuiz } = useQuiz();
  const bgColorClassName: string = iconBgColor(section);
  const icon = getIcon(section) || "";
  const questions =
    DATA.quizzes.find((quiz) => quiz.title === section)?.questions ?? [];

  return (
    <Button
      className="option-item option-shadow"
      onClick={() => startQuiz(section, questions)}
    >
      <Icon bgColorClassName={bgColorClassName} icon={icon} title={section} />
      <p className="text-preset-4-mobile sm:text-preset-4 text-blue-900">
        {section}
      </p>
    </Button>
  );
}
