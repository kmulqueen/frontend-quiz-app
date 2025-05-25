import { type RefObject } from "react";
import AnswerItem from "./AnswerItem";

type AnswerListProps = {
  options: string[];
  isCorrect: boolean | null;
  selectedAnswer: string;
  correctAnswer: string;
  answerSubmitted: boolean;
  nextButtonRef?: RefObject<HTMLButtonElement | null>;
  handleSelectAnswer: (answer: string) => void;
  handleSubmitAnswer: (answerToSubmit?: string) => void;
};

export default function AnswerList({
  options,
  isCorrect,
  selectedAnswer,
  correctAnswer,
  answerSubmitted,
  nextButtonRef,
  handleSelectAnswer,
  handleSubmitAnswer,
}: AnswerListProps) {
  return (
    <ul className="mb-4 flex flex-col gap-4">
      {options.map((option, i) => {
        let optionLetter: string;
        switch (i) {
          case 0:
            optionLetter = "A";
            break;
          case 1:
            optionLetter = "B";
            break;
          case 2:
            optionLetter = "C";
            break;
          case 3:
            optionLetter = "D";
            break;

          default:
            optionLetter = "";
            break;
        }
        return (
          <li key={option}>
            <AnswerItem
              answerContent={option}
              answerOption={optionLetter}
              isCorrect={isCorrect}
              selectedAnswer={selectedAnswer}
              correctAnswer={correctAnswer}
              answerSubmitted={answerSubmitted}
              nextButtonRef={nextButtonRef}
              handleSelectAnswer={() => handleSelectAnswer(option)}
              handleSubmitAnswer={handleSubmitAnswer}
            />
          </li>
        );
      })}
    </ul>
  );
}
