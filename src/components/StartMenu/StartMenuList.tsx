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
    <ul role="list" className="flex flex-col gap-4" aria-label="Quiz subjects">
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
