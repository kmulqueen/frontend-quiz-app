import DATA from "./data.json";
import StartMenu from "./views/StartMenu";
import QuestionPage from "./views/QuestionPage";
import ResultsPage from "./views/ResultsPage";
import Header from "./components/layout/Header";
import { useState } from "react";
import Container from "./components/layout/Container";

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
  const [answerSubmitted, setAnswerSubmitted] = useState<boolean>(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isLastQuestion, setIsLastQuestion] = useState<boolean>(false);
  const [correctCount, setCorrectCount] = useState<number>(0);

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

  function handleSubmitAnswer(answerToSubmit?: string) {
    const answerToCheck = answerToSubmit || selectedAnswer;

    if (answerToCheck === "") {
      setErrorMessage("Please select an answer");
    } else {
      setAnswerSubmitted(true);
      if (answerToCheck !== currentQuestionObject?.answer) {
        setIsCorrect(false);
      } else if (answerToCheck === currentQuestionObject.answer) {
        setIsCorrect(true);
        setCorrectCount((prevState) => prevState + 1);
      }
    }
  }

  function handleNextQuestion() {
    setSelectedAnswer("");
    setAnswerSubmitted(false);
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

  function handleShowResults() {
    setQuizInProgress(false);
    setShowResults(true);
  }

  function handleResetQuiz() {
    setQuizInProgress(false);
    setShowResults(false);
    setQuizSection("");
    setSectionQuestions([]);
    setCurrentQuestionObject(null);
    setCurrentQuestionNumber(0);
    setQuestionCount(0);
    setSelectedAnswer("");
    setAnswerSubmitted(false);
    setIsCorrect(null);
    setIsLastQuestion(false);
    setCorrectCount(0);
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
      <Container as="main" className="px-6 py-8">
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
            isCorrect={isCorrect}
            selectedAnswer={selectedAnswer}
            correctAnswer={currentQuestionObject?.answer ?? ""}
            answerSubmitted={answerSubmitted}
            handleSelectAnswer={handleSelectAnswer}
            handleSubmitAnswer={handleSubmitAnswer}
            handleNextQuestion={handleNextQuestion}
          />
        )}
        {showResults && (
          <ResultsPage
            section={quizSection}
            icon={
              quizSection !== ""
                ? `./assets/images/icon-${quizSection.toLowerCase()}.svg`
                : null
            }
            questionCount={questionCount}
            correctCount={correctCount}
            handleResetQuiz={handleResetQuiz}
          />
        )}
      </Container>
    </>
  );
}

export default App;
