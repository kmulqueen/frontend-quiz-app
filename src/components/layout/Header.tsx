import { useQuiz } from "../../contexts/useQuiz";
import { getIcon } from "../../utils/get-icon";
import { iconBgColor } from "../../utils/icon-bgcolor";
import Icon from "./Icon";

export default function Header() {
  const { selectedSection } = useQuiz();
  const icon = getIcon(selectedSection) || "";
  const bgColorClassName = iconBgColor(selectedSection);

  return (
    <header className="px-6 py-4 sm:px-16 sm:py-10">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="flex items-center gap-4 sm:gap-6">
        <Icon
          bgColorClassName={bgColorClassName}
          icon={icon}
          title={selectedSection}
        />
        <p className="text-preset-4-mobile sm:text-preset-4 text-blue-900">
          {selectedSection}
        </p>
      </div>
    </header>
  );
}
