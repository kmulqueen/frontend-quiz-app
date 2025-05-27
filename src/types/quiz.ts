export type QuestionObject = {
  question: string;
  options: string[];
  answer: string;
};

export type Quiz = {
  title: string;
  icon: string;
  questions: QuestionObject[];
};

export type QuizState = {
  // Quiz selection
  selectedSection: string;

  // Quiz flow
  isInProgress: boolean;
  showResults: boolean;

  // Current question data
  questions: QuestionObject[];
  currentQuestion: QuestionObject | null;
  currentQuestionNumber: number;
  totalQuestions: number;

  // Answer state
  selectedAnswer: string;
  answerSubmitted: boolean;
  isCorrect: boolean | null;
  errorMessage: string;

  // Quiz progress
  isLastQuestion: boolean;
  correctCount: number;
};

export type QuizContextValue = QuizState & {
  startQuiz: (title: string, questions: QuestionObject[]) => void;
  selectAnswer: (answer: string) => void;
  submitAnswer: (answer?: string) => void;
  nextQuestion: () => void;
  resetQuiz: () => void;
};

type StartQuizAction = {
  type: "START_QUIZ";
  payload: { title: string; questions: QuestionObject[] };
};
type SelectAnswerAction = { type: "SELECT_ANSWER"; payload: string };
type SubmitAnswerAction = {
  type: "SUBMIT_ANSWER";
  payload: string;
};
type NextQuestionAction = { type: "NEXT_QUESTION" };
type ResetQuizAction = { type: "RESET_QUIZ" };
type SetErrorAction = { type: "SET_ERROR"; payload: string };

export type QuizAction =
  | StartQuizAction
  | SelectAnswerAction
  | SubmitAnswerAction
  | NextQuestionAction
  | ResetQuizAction
  | SetErrorAction;
