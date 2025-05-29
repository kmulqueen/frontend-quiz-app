import Icon from "./Icon";
import Container from "./Container";
import { useQuiz } from "../../contexts/useQuiz";

type IconWithSectionProps = {
  section: string;
};

export default function IconWithSection({ section }: IconWithSectionProps) {
  const { selectedSection } = useQuiz();
  return (
    <Container className="flex items-center gap-4 sm:gap-6">
      <Icon section={selectedSection || section} />
      <p className="text-preset-4-mobile sm:text-preset-4 text-blue-900">
        {selectedSection || section}
      </p>
    </Container>
  );
}
