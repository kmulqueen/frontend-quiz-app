import Icon from "./Icon";
import Container from "./Container";
import { useQuiz } from "../../contexts/useQuiz";

type IconWithSectionProps = {
  section: string;
};

export default function IconWithSection({ section }: IconWithSectionProps) {
  const { selectedSection } = useQuiz();
  return (
    <Container className="flex items-center gap-4 sm:gap-6 xl:gap-8">
      <Icon section={selectedSection || section} />
      <p className="text-preset-4-mobile text-blue-900 sm:text-preset-4 dark:text-white">
        {selectedSection || section}
      </p>
    </Container>
  );
}
