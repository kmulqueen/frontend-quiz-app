import { useContext } from "react";
import { QuizContext } from "./QuizContext";
import type { QuizContextValue } from "../types/quiz";

export function useQuiz(): QuizContextValue {
  const context = useContext(QuizContext);
  if (context === null) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}
