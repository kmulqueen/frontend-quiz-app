import StartMenuItem from "./StartMenuItem";

type StartMenuListProps = {
  subjects: {
    icon: string;
    title: string;
  }[];
  handleStartQuiz: (title: string) => void;
};

export default function StartMenuList({
  subjects,
  handleStartQuiz,
}: StartMenuListProps) {
  return (
    <ul className="flex flex-col gap-4">
      {subjects.map((quiz) => (
        <li key={quiz.title}>
          <StartMenuItem
            icon={quiz.icon}
            title={quiz.title}
            handleStartQuiz={handleStartQuiz}
          />
        </li>
      ))}
    </ul>
  );
}
