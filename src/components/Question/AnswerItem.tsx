import { type RefObject } from "react";
import Button from "../layout/Button";
import StatusIcon from "../layout/StatusIcon";
import AnswerLetter from "../layout/AnswerLetter";

type AnswerItemProps = {
  answerOption: string;
  answerContent: string;
  selectedAnswer: string;
  correctAnswer: string;
  answerSubmitted: boolean;
  isCorrect: boolean | null;
  nextButtonRef?: RefObject<HTMLButtonElement | null>;
  handleSelectAnswer: () => void;
  handleSubmitAnswer: (answerToSubmit?: string) => void;
};

export default function AnswerItem({
  answerOption,
  answerContent,
  selectedAnswer,
  correctAnswer,
  answerSubmitted,
  isCorrect,
  nextButtonRef,
  handleSelectAnswer,
  handleSubmitAnswer,
}: AnswerItemProps) {
  const errorOutlineClass =
    answerSubmitted && isCorrect === false && answerContent === selectedAnswer
      ? "outline-2 outline-red-500"
      : "";

  const correctOutlineClass =
    answerSubmitted && isCorrect === true && answerContent === selectedAnswer
      ? "outline-2 outline-green-500"
      : "";
  return (
    <Button
      className={`answer-item group ${errorOutlineClass} ${correctOutlineClass}`}
      onClick={handleSelectAnswer}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          e.stopPropagation();
          handleSelectAnswer();
          handleSubmitAnswer(answerContent);
          setTimeout(() => {
            nextButtonRef?.current?.focus();
          }, 0);
        }
      }}
    >
      <AnswerLetter
        isCorrect={isCorrect}
        answerContent={answerContent}
        answerSubmitted={answerSubmitted}
        selectedAnswer={selectedAnswer}
        answerOption={answerOption}
      />
      <p className="grow self-center text-preset-4-mobile text-blue-900">
        {answerContent}
      </p>
      <StatusIcon
        isCorrect={isCorrect}
        answerContent={answerContent}
        answerSubmitted={answerSubmitted}
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
      />
    </Button>
  );
}
