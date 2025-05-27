import { useReducer, type PropsWithChildren } from "react";
import type {
  QuizContextValue,
  QuizState,
  QuizAction,
  QuestionObject,
} from "../types/quiz";
import { QuizContext } from "./QuizContext";

const initialState: QuizState = {
  selectedSection: "",
  isInProgress: false,
  showResults: false,
  questions: [],
  currentQuestion: null,
  currentQuestionNumber: 0,
  totalQuestions: 0,
  selectedAnswer: "",
  answerSubmitted: false,
  isCorrect: null,
  errorMessage: "",
  isLastQuestion: false,
  correctCount: 0,
};

function quizReducer(state: QuizState, action: QuizAction): QuizState {
  switch (action.type) {
    case "START_QUIZ": {
      const { title, questions } = action.payload;
      return {
        ...initialState,
        selectedSection: title,
        isInProgress: true,
        questions,
        currentQuestion: questions[0] || null,
        currentQuestionNumber: questions.length > 0 ? 1 : 0,
        totalQuestions: questions.length,
      };
    }

    case "SELECT_ANSWER":
      return {
        ...state,
        selectedAnswer: action.payload,
        errorMessage: "",
      };

    case "SUBMIT_ANSWER": {
      const answer = action.payload;
      if (!answer) {
        return {
          ...state,
          errorMessage: "Please select an answer",
        };
      }

      const isCorrect = answer === state.currentQuestion?.answer;
      return {
        ...state,
        answerSubmitted: true,
        isCorrect,
        correctCount: isCorrect ? state.correctCount + 1 : state.correctCount,
        errorMessage: "",
      };
    }

    case "NEXT_QUESTION": {
      const nextQuestionNumber = state.currentQuestionNumber + 1;
      if (nextQuestionNumber <= state.totalQuestions) {
        return {
          ...state,
          currentQuestionNumber: nextQuestionNumber,
          currentQuestion: state.questions[nextQuestionNumber - 1] || null,
          selectedAnswer: "",
          answerSubmitted: false,
          isCorrect: null,
          isLastQuestion: nextQuestionNumber === state.totalQuestions,
        };
      }

      // If quiz is at end then show results
      return {
        ...state,
        isInProgress: false,
        showResults: true,
      };
    }

    case "RESET_QUIZ":
      return initialState;

    case "SET_ERROR": {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }

    default:
      return state;
  }
}

export function QuizProvider({ children }: PropsWithChildren) {
  const [quizState, dispatch] = useReducer(quizReducer, initialState);
  const ctx: QuizContextValue = {
    ...quizState,
    startQuiz(title: string, questions: QuestionObject[]) {
      dispatch({ type: "START_QUIZ", payload: { title, questions } });
    },
    selectAnswer(answer: string) {
      dispatch({ type: "SELECT_ANSWER", payload: answer });
    },
    submitAnswer(answer?: string) {
      const answerToSubmit = answer || quizState.selectedAnswer;
      dispatch({
        type: "SUBMIT_ANSWER",
        payload: answerToSubmit,
      });
    },
    nextQuestion() {
      dispatch({ type: "NEXT_QUESTION" });
    },
    resetQuiz() {
      dispatch({ type: "RESET_QUIZ" });
    },
  };

  return <QuizContext.Provider value={ctx}>{children}</QuizContext.Provider>;
}
