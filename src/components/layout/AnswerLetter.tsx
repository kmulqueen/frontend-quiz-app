import type { ComponentPropsWithoutRef } from "react";

type AnswerLetterProps = {
  answerSubmitted: boolean;
  isCorrect: boolean | null;
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
  return (
    <p
      className={`h-10 w-10 place-content-center place-self-center rounded-lg p-2 text-center text-preset-4-mobile ${
        answerSubmitted &&
        isCorrect === true &&
        answerContent === selectedAnswer
          ? "bg-green-500 text-white"
          : answerSubmitted &&
            isCorrect === false &&
            answerContent === selectedAnswer
          ? "bg-red-500 text-white"
          : "bg-grey-50 text-grey-500 group-focus:bg-purple-600 group-focus:text-white group-active:bg-purple-600 group-active:text-white"
      }`}
    >
      {answerOption}
    </p>
  );
}
