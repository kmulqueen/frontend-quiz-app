import Container from "../components/Layout/Container";
import StartMenuList from "../components/StartMenu/StartMenuList";

export default function StartMenu() {
  return (
    <Container as="section" aria-labelledby="quiz-start-menu">
      <div className="mb-10 flex flex-col gap-4">
        <h1
          className="text-preset-2-light-mobile text-blue-900"
          id="quiz-start-menu"
        >
          Welcome to the{" "}
          <span className="text-preset-2-medium-mobile">Frontend Quiz!</span>
        </h1>
        <p className="text-preset-5-mobile text-grey-500">
          Pick a subject to get started.
        </p>
      </div>
      <StartMenuList />
    </Container>
  );
}
