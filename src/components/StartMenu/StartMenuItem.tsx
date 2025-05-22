type StartMenuItemProps = {
  icon: string;
  title: string;
  handleStartQuiz: (title: string) => void;
};

export default function StartMenuItem({
  icon,
  title,
  handleStartQuiz,
}: StartMenuItemProps) {
  let bgColorClassName: string;

  switch (title) {
    case "HTML":
      bgColorClassName = "bg-orange-50";
      break;
    case "CSS":
      bgColorClassName = "bg-green-100";
      break;
    case "JavaScript":
      bgColorClassName = "bg-blue-50";
      break;
    case "Accessibility":
      bgColorClassName = "bg-purple-100";
      break;
    default:
      bgColorClassName = "bg-transparent";
      break;
  }

  return (
    <button className="option-item" onClick={() => handleStartQuiz(title)}>
      <div className={`${bgColorClassName} rounded-lg p-2`}>
        <img src={icon} alt={`Icon for ${title} quiz.`} />
      </div>
      <h2 className="text-preset-4-mobile text-blue-900">{title}</h2>
    </button>
  );
}
