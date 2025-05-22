import DATA from "../data.json";
import StartMenuList from "../components/StartMenu/StartMenuList";

type StartMenuProps = {
  handleStartQuiz: (title: string) => void;
};

export default function StartMenu({ handleStartQuiz }: StartMenuProps) {
  return (
    <main className="px-6 py-8">
      <div className="mb-10 flex flex-col gap-4">
        <h1 className="text-preset-2-light-mobile text-blue-900">
          Welcome to the{" "}
          <span className="text-preset-2-medium-mobile">Frontend Quiz!</span>
        </h1>
        <p className="text-preset-5-mobile text-grey-500">
          Pick a subject to get started.
        </p>
      </div>
      <StartMenuList
        subjects={DATA.quizzes}
        handleStartQuiz={handleStartQuiz}
      />
    </main>
  );
}
