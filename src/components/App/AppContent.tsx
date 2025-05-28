import StartMenu from "../../views/StartMenu";
import QuestionPage from "../../views/QuestionPage";
import ResultsPage from "../../views/ResultsPage";
import Header from "../Layout/Header";
import Container from "../Layout/Container";
import { useQuiz } from "../../contexts/useQuiz";

function AppContent() {
  const { isInProgress, showResults } = useQuiz();

  return (
    <>
      <Header />
      <Container as="main" className="px-6 py-8" id="main-content">
        {!isInProgress && !showResults && <StartMenu />}
        {isInProgress && <QuestionPage />}
        {showResults && <ResultsPage />}
      </Container>
    </>
  );
}

export default AppContent;
