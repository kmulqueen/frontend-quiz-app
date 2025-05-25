import AnswerItem from "./AnswerItem";

type AnswerListProps = {
  options: string[];
  handleSelectAnswer: (answer: string) => void;
};

export default function AnswerList({
  options,
  handleSelectAnswer,
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
          <li key={option} onClick={() => handleSelectAnswer(option)}>
            <AnswerItem answerContent={option} answerOption={optionLetter} />
          </li>
        );
      })}
    </ul>
  );
}
