import { createContext } from "react";
import type { QuizContextValue } from "../types/quiz";

export const QuizContext = createContext<QuizContextValue | null>(null);
