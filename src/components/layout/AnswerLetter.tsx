import type { ComponentPropsWithoutRef } from "react";

type AnswerLetterProps = {
  answerSubmitted: boolean;
  isCorrect: boolean | null;
  isSelected: boolean;
  answerContent: string;
  selectedAnswer: string;
  answerOption: string;
} & ComponentPropsWithoutRef<"p">;

export default function AnswerLetter({
  answerContent,
  answerSubmitted,
  isCorrect,
  selectedAnswer,
  answerOption,
}: AnswerLetterProps) {
  const isSelected = selectedAnswer === answerContent;

  const getLetterClasses = () => {
    if (answerSubmitted) {
      if (isCorrect === true && isSelected) {
        return "bg-green-500 text-white";
      } else if (isCorrect === false && isSelected) {
        return "bg-red-500 text-white";
      } else {
        return "bg-grey-50 text-grey-500";
      }
    } else if (isSelected) {
      return "bg-purple-600 text-white";
    } else {
      return "bg-grey-50 text-grey-500 group-focus-within:bg-purple-600 group-focus-within:text-white";
    }
  };

  return (
    <p
      className={`h-10 w-10 place-content-center place-self-center rounded-lg p-2 text-center text-preset-4-mobile ${getLetterClasses()}`}
    >
      {answerOption}
    </p>
  );
}
