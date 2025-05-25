import DATA from "./data.json";
import StartMenu from "./views/StartMenu";
import QuestionPage from "./views/QuestionPage";
import ResultsPage from "./views/ResultsPage";
import Header from "./components/layout/Header";
import { useState } from "react";

type QuestionObject = {
  question: string;
  options: string[];
  answer: string;
};

function App() {
  const [quizSection, setQuizSection] = useState<string>("");
  const [quizInProgress, setQuizInProgress] = useState<boolean>(false);
  const [showResults, setShowResults] = useState<boolean>(false);
  const [sectionQuestions, setSectionQuestions] = useState<QuestionObject[]>(
    []
  );
  const [currentQuestionObject, setCurrentQuestionObject] =
    useState<QuestionObject | null>(null);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(0);
  const [questionCount, setQuestionCount] = useState<number>(0);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [selectedAnswer, setSelectedAnswer] = useState<string>("");
  const [answerCorrect, setAnswerCorrect] = useState<boolean | null>(null);
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);

  function handleStartQuiz(title: string) {
    setQuizSection(title);
    setQuizInProgress(true);
    const questions =
      DATA.quizzes.find((quiz) => quiz.title === title)?.questions ?? [];
    setSectionQuestions(questions);
    setCurrentQuestionNumber(questions[0] ? 1 : 0);
    setQuestionCount(questions.length);
    setCurrentQuestionObject(questions[0] ? questions[0] : null);
  }

  function handleSelectAnswer(answer: string) {
    setErrorMessage("");
    setSelectedAnswer(answer);
  }

  function handleSubmitAnswer() {
    if (selectedAnswer === "") {
      setErrorMessage("Please select an answer");
    } else if (selectedAnswer !== currentQuestionObject?.answer) {
      setAnswerCorrect(false);
    } else if (selectedAnswer === currentQuestionObject.answer) {
      setAnswerCorrect(true);
    }
  }

  function handleNextQuestion() {
    if (currentQuestionNumber < questionCount) {
      const nextQuestionNumber = currentQuestionNumber + 1;
      setCurrentQuestionNumber(nextQuestionNumber);
      setCurrentQuestionObject(sectionQuestions[nextQuestionNumber - 1]);

      if (nextQuestionNumber === questionCount) {
        setIsLastQuestion(true);
      }
    } else {
      handleShowResults();
    }
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
      {quizInProgress && (
        <QuestionPage
          options={currentQuestionObject?.options}
          question={currentQuestionObject?.question}
          questionNumber={currentQuestionNumber}
          totalQuestions={questionCount}
          errorMessage={errorMessage}
          isLastQuestion={isLastQuestion}
          handleSelectAnswer={handleSelectAnswer}
          handleSubmitAnswer={handleSubmitAnswer}
          handleNextQuestion={handleNextQuestion}
        />
      )}
      {showResults && <ResultsPage />}
    </>
  );
}

export default App;
