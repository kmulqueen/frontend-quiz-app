import AnswerItem from "./AnswerItem";

type AnswerListProps = {
  options: string[];
};

export default function AnswerList({ options }: AnswerListProps) {
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
            <AnswerItem answerContent={option} answerOption={optionLetter} />
          </li>
        );
      })}
    </ul>
  );
}
