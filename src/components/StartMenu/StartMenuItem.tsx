import iconBgColor from "../../utils/icon-bgcolor";
import Icon from "../layout/Icon";
import Button from "../layout/Button";

type StartMenuItemProps = {
  icon: string;
  title: string;
  handleStartQuiz: (title: string) => void;
};

export default function StartMenuItem({
  icon,
  title,
  handleStartQuiz,
}: StartMenuItemProps) {
  const bgColorClassName: string = iconBgColor(title);

  return (
    <Button className="option-item" onClick={() => handleStartQuiz(title)}>
      <Icon bgColorClassName={bgColorClassName} icon={icon} title={title} />
      <h2 className="text-preset-4-mobile text-blue-900">{title}</h2>
    </Button>
  );
}
