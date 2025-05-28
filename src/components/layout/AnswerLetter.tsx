import type { ComponentPropsWithoutRef } from "react";
import { useQuiz } from "../../contexts/useQuiz";

type AnswerLetterProps = {
  answerContent: string;
  answerOption: string;
} & ComponentPropsWithoutRef<"p">;

export default function AnswerLetter({
  answerContent,
  answerOption,
}: AnswerLetterProps) {
  const { answerSubmitted, isCorrect, selectedAnswer } = useQuiz();
  const isSelected = selectedAnswer === answerContent;

  const getLetterClasses = () => {
    if (answerSubmitted) {
      if (isCorrect === true && isSelected) {
        return "answer-letter-correct";
      } else if (isCorrect === false && isSelected) {
        return "answer-letter-incorrect";
      } else {
        return "answer-letter-not-selected";
      }
    } else if (isSelected) {
      return "answer-letter-selected";
    } else {
      return "answer-letter-default";
    }
  };

  return (
    <p className={`answer-letter ${getLetterClasses()}`}>{answerOption}</p>
  );
}
