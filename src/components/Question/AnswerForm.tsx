import { type RefObject } from "react";
import AnswerItem from "./AnswerItem";
import Container from "../layout/Container";

type AnswerFormProps = {
  options: string[];
  isCorrect: boolean | null;
  questionNumber: number;
  selectedAnswer: string;
  correctAnswer: string;
  answerSubmitted: boolean;
  nextButtonRef?: RefObject<HTMLButtonElement | null>;
  handleSelectAnswer: (answer: string) => void;
  handleSubmitAnswer: (answerToSubmit?: string) => void;
};

export default function AnswerForm({
  options,
  isCorrect,
  questionNumber,
  selectedAnswer,
  correctAnswer,
  answerSubmitted,
  nextButtonRef,
  handleSelectAnswer,
  handleSubmitAnswer,
}: AnswerFormProps) {
  const ariaId = `question-${questionNumber}-answers`;
  return (
    <Container as="fieldset" className="mb-4 flex flex-col">
      <legend className="sr-only" id={ariaId}>
        Select your answer from the following options.
      </legend>
      <div
        role="radiogroup"
        aria-labelledby={ariaId}
        className="flex flex-col gap-4"
      >
        {options.map((option, i) => {
          const optionLetter: string = String.fromCharCode(65 + i);
          return (
            <AnswerItem
              key={option}
              answerContent={option}
              answerOption={optionLetter}
              isCorrect={isCorrect}
              questionNumber={questionNumber}
              selectedAnswer={selectedAnswer}
              correctAnswer={correctAnswer}
              answerSubmitted={answerSubmitted}
              nextButtonRef={nextButtonRef}
              handleSelectAnswer={() => handleSelectAnswer(option)}
              handleSubmitAnswer={handleSubmitAnswer}
            />
          );
        })}
      </div>
    </Container>
  );
}
