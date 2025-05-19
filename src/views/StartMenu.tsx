import DATA from "../data.json";
import StartMenuList from "../components/layout/StartMenuList";

type StartMenuProps = {
  handleStartQuiz: (title: string) => void;
};

export default function StartMenu({ handleStartQuiz }: StartMenuProps) {
  return (
    <main className="px-6 py-8">
      <div className="flex flex-col gap-4 mb-10">
        <h1 className="text-blue-900 text-preset-2-light-mobile">
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
