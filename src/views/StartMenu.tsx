import Container from "../components/Layout/Container";
import StartMenuList from "../components/StartMenu/StartMenuList";

export default function StartMenu() {
  return (
    <Container as="section" aria-labelledby="quiz-start-menu">
      <div className="mb-10 sm:mb-16 flex flex-col gap-4">
        <h1
          className="text-preset-2-light-mobile sm:text-preset-2-light text-blue-900"
          id="quiz-start-menu"
        >
          Welcome to the
          <br />
          <span className="text-preset-2-medium-mobile sm:text-preset-2-medium">
            Frontend Quiz!
          </span>
        </h1>
        <p className="text-preset-5-mobile sm:text-preset-6 text-grey-500">
          Pick a subject to get started.
        </p>
      </div>
      <StartMenuList />
    </Container>
  );
}
