import { useQuiz } from "../../contexts/useQuiz";
import { getIcon } from "../../utils/get-icon";
import { iconBgColor } from "../../utils/icon-bgcolor";

type IconProps = {
  section: string;
};

export default function Icon({ section }: IconProps) {
  const { selectedSection } = useQuiz();
  const icon = getIcon(section) || getIcon(selectedSection) || "";
  const bgColorClassName = iconBgColor(section) || iconBgColor(selectedSection);
  return (
    <div className={`rounded-lg ${bgColorClassName} p-2`}>
      <img src={icon} alt={icon !== "" ? `Icon for ${section} quiz.` : ""} />
    </div>
  );
}
