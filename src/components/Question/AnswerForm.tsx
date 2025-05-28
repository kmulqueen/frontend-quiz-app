import { type RefObject } from "react";
import AnswerItem from "./AnswerItem";
import Container from "../Layout/Container";
import { useQuiz } from "../../contexts/useQuiz";

type AnswerFormProps = {
  nextButtonRef?: RefObject<HTMLButtonElement | null>;
};

export default function AnswerForm({ nextButtonRef }: AnswerFormProps) {
  const { currentQuestion, currentQuestionNumber } = useQuiz();
  const ariaId = `question-${currentQuestionNumber}-answers`;
  return (
    <Container as="fieldset" className="mb-4 flex flex-col sm:mb-8">
      <legend className="sr-only" id={ariaId}>
        Select your answer from the following options.
      </legend>
      <div
        role="radiogroup"
        aria-labelledby={ariaId}
        className="flex flex-col gap-4 sm:gap-6"
      >
        {currentQuestion?.options.map((option, i) => {
          const optionLetter: string = String.fromCharCode(65 + i);
          return (
            <AnswerItem
              key={option}
              answerContent={option}
              answerOption={optionLetter}
              nextButtonRef={nextButtonRef}
            />
          );
        })}
      </div>
    </Container>
  );
}
