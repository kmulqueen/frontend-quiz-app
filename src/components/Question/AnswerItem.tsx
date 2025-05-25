import { type RefObject } from "react";

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
    <button
      className={`answer-item group active:outline-2 focus:outline-2 focus-visible:outline-2 active:outline-purple-600 focus:outline-purple-600 focus-visible:outline-purple-600 ${errorOutlineClass} ${correctOutlineClass}`}
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
      <p
        className={`p-2 text-preset-4-mobile rounded-lg text-center place-content-center place-self-center h-10 w-10 ${
          answerSubmitted &&
          isCorrect === true &&
          answerContent === selectedAnswer
            ? "bg-green-500 text-white"
            : answerSubmitted &&
              isCorrect === false &&
              answerContent === selectedAnswer
            ? "bg-red-500 text-white"
            : "bg-grey-50 text-grey-500 group-active:bg-purple-600 group-active:text-white group-focus:bg-purple-600 group-focus:text-white"
        }`}
      >
        {answerOption}
      </p>
      <p className="text-preset-4-mobile text-blue-900 grow self-center">
        {answerContent}
      </p>
      {isCorrect === false &&
        answerContent === selectedAnswer &&
        answerSubmitted && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            fill="none"
            viewBox="0 0 40 40"
            className="place-self-center"
          >
            <path
              fill="#EE5454"
              d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-5.402 7.415.142-.175a1.25 1.25 0 0 1 1.595-.143l.175.143L20 18.233l3.49-3.493a1.25 1.25 0 0 1 1.595-.143l.175.143a1.25 1.25 0 0 1 .142 1.595l-.142.175L21.767 20l3.493 3.49a1.25 1.25 0 0 1 .142 1.595l-.142.175a1.25 1.25 0 0 1-1.595.142l-.175-.142L20 21.767l-3.49 3.493a1.25 1.25 0 0 1-1.595.142l-.175-.142a1.25 1.25 0 0 1-.143-1.595l.143-.175L18.233 20l-3.493-3.49a1.25 1.25 0 0 1-.143-1.595Z"
            />
          </svg>
        )}
      {((isCorrect === true &&
        answerContent === selectedAnswer &&
        answerSubmitted) ||
        (isCorrect === false &&
          answerContent === correctAnswer &&
          answerSubmitted)) && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          fill="none"
          viewBox="0 0 40 40"
          className="place-self-center"
        >
          <path
            fill="#26D782"
            d="M20 5a15 15 0 1 1 0 30 15 15 0 0 1 0-30Zm0 2.5a12.5 12.5 0 1 0 0 25 12.5 12.5 0 0 0 0-25Zm-1.875 15.105L25.3 15.41a1.25 1.25 0 0 1 1.915 1.593l-.145.174-8.06 8.08a1.25 1.25 0 0 1-1.595.148l-.175-.145-4.375-4.375a1.25 1.25 0 0 1 1.595-1.913l.175.143 3.49 3.49Z"
          />
        </svg>
      )}
    </button>
  );
}
