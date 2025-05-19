import StartMenu from "./views/StartMenu";
import QuestionPage from "./views/QuestionPage";
import ResultsPage from "./views/ResultsPage";
import Header from "./components/layout/Header";
import { useState } from "react";

function App() {
  const [quizSection, setQuizSection] = useState<string>("");
  const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);

  function handleStartQuiz(title: string) {
    setQuizSection(title);
    setQuizInProgress(true);
  }

  //TODO: - Call this function on click for last question in quiz.
  function handleShowResults() {
    setQuizInProgress(false);
    setShowResults(true);
  }

  //TODO: - Call this function on "Play Again" button click on results page.
  function handleResetQuiz() {
    setQuizInProgress(false);
    setShowResults(false);
    setQuizSection("");
  }

  return (
    <>
      <Header
        section={quizSection}
        icon={
          quizSection !== ""
            ? `./assets/images/icon-${quizSection.toLowerCase()}.svg`
            : null
        }
      />
      {quizSection === "" && showResults === false && !quizInProgress && (
        <StartMenu handleStartQuiz={handleStartQuiz} />
      )}
      {quizInProgress && <QuestionPage />}
      {showResults && <ResultsPage />}
    </>
  );
}

export default App;
