import { type RefObject } from "react";
import StatusIcon from "../layout/StatusIcon";
import AnswerLetter from "../layout/AnswerLetter";
import Container from "../layout/Container";

type AnswerItemProps = {
  answerOption: string;
  answerContent: string;
  selectedAnswer: string;
  correctAnswer: string;
  questionNumber: number;
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
  questionNumber,
  answerSubmitted,
  isCorrect,
  nextButtonRef,
  handleSelectAnswer,
  handleSubmitAnswer,
}: AnswerItemProps) {
  const isSelected = selectedAnswer === answerContent;
  let outlineClass = "";

  if (answerSubmitted) {
    if (isCorrect === false && isSelected) {
      outlineClass = "outline-2 outline-red-500";
    } else if (isCorrect === true && isSelected) {
      outlineClass = "outline-2 outline-green-500";
    }
  } else if (isSelected) {
    outlineClass = "outline-2 outline-purple-500";
  } else {
    outlineClass = "focus-within:outline-2 focus-within:outline-purple-500";
  }

  const radioId = `question-${questionNumber}-answer-${answerOption}`;
  return (
    <Container
      as="label"
      htmlFor={radioId}
      className={`answer-item group ${outlineClass}`}
    >
      <input
        type="radio"
        name={`question-${questionNumber}`}
        id={radioId}
        value={answerContent}
        checked={selectedAnswer === answerContent}
        className="sr-only"
        onChange={handleSelectAnswer}
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
        disabled={answerSubmitted}
      />
      <AnswerLetter
        isCorrect={isCorrect}
        isSelected={isSelected}
        answerSubmitted={answerSubmitted}
        answerOption={answerOption}
        answerContent={answerContent}
        selectedAnswer={selectedAnswer}
      />
      <span className="grow self-center text-preset-4-mobile text-blue-900">
        {answerContent}
      </span>
      <StatusIcon
        isCorrect={isCorrect}
        answerContent={answerContent}
        answerSubmitted={answerSubmitted}
        selectedAnswer={selectedAnswer}
        correctAnswer={correctAnswer}
      />
    </Container>
  );
}
