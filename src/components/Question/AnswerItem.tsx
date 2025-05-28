import { type RefObject } from "react";
import StatusIcon from "../Layout/StatusIcon";
import AnswerLetter from "../Layout/AnswerLetter";
import Container from "../Layout/Container";
import { useQuiz } from "../../contexts/useQuiz";

type AnswerItemProps = {
  answerOption: string;
  answerContent: string;
  nextButtonRef?: RefObject<HTMLButtonElement | null>;
};

export default function AnswerItem({
  answerOption,
  answerContent,
  nextButtonRef,
}: AnswerItemProps) {
  const {
    selectedAnswer,
    currentQuestionNumber,
    answerSubmitted,
    isCorrect,
    selectAnswer,
    submitAnswer,
  } = useQuiz();
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

  const radioId = `question-${currentQuestionNumber}-answer-${answerOption}`;
  return (
    <Container
      as="label"
      htmlFor={radioId}
      className={`answer-item group ${outlineClass}`}
    >
      <input
        type="radio"
        name={`question-${currentQuestionNumber}`}
        id={radioId}
        value={answerContent}
        checked={selectedAnswer === answerContent}
        className="sr-only"
        onChange={() => selectAnswer(answerContent)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault();
            e.stopPropagation();
            selectAnswer(answerContent);
            submitAnswer(answerContent);
            setTimeout(() => {
              nextButtonRef?.current?.focus();
            }, 0);
          }
        }}
        disabled={answerSubmitted}
      />
      <AnswerLetter answerOption={answerOption} answerContent={answerContent} />
      <span className="grow self-center text-preset-4-mobile text-blue-900">
        {answerContent}
      </span>
      <StatusIcon answerContent={answerContent} />
    </Container>
  );
}
