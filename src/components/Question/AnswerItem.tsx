import { type RefObject } from "react";
import StatusIcon from "../Layout/StatusIcon";
import AnswerLetter from "../Layout/AnswerLetter";
import Container from "../Layout/Container";
import { getOutlineColor } from "../../utils/get-outline-color";
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
  const outlineClass = getOutlineColor({
    isCorrect,
    isSelected,
    answerSubmitted,
  });

  const radioId = `question-${currentQuestionNumber}-answer-${answerOption}`;
  return (
    <Container
      as="label"
      htmlFor={radioId}
      className={`answer-item option-shadow group ${outlineClass}`}
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
      <span className="answer-content text-blue-900 dark:text-white">
        {answerContent}
      </span>
      <StatusIcon answerContent={answerContent} />
    </Container>
  );
}
