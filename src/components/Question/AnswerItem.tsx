type AnswerItemProps = {
  answerOption: string;
  answerContent: string;
};

export default function AnswerItem({
  answerOption,
  answerContent,
}: AnswerItemProps) {
  return (
    <button className="option-item">
      <p className="bg-grey-50 p-2 text-preset-4-mobile text-grey-500">
        {answerOption}
      </p>
      <p className="text-preset-4-mobile text-blue-900">{answerContent}</p>
    </button>
  );
}
