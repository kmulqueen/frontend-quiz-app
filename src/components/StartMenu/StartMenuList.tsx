import DATA from "../../data.json";
import StartMenuItem from "./StartMenuItem";

export default function StartMenuList() {
  const subjects = DATA.quizzes;
  return (
    <ul
      role="list"
      className="flex flex-col gap-4 sm:gap-6 xl:grow"
      aria-label="Quiz subjects"
    >
      {subjects.map((quiz) => (
        <li key={quiz.title}>
          <StartMenuItem section={quiz.title} />
        </li>
      ))}
    </ul>
  );
}
