import { useQuiz } from "../../contexts/useQuiz";
import { getIcon } from "../../utils/get-icon";

export default function Header() {
  const { selectedSection } = useQuiz();

  const icon = getIcon(selectedSection);

  return (
    <header className="px-6 py-4">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="flex items-center gap-4">
        {icon && <img src={icon} alt={`${selectedSection} quiz`} />}
        <p className="text-preset-4-mobile">{selectedSection}</p>
      </div>
    </header>
  );
}
