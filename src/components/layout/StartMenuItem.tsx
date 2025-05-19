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
    <button
      className="start-menu-item w-full cursor-pointer"
      onClick={() => handleStartQuiz(title)}
    >
      <div className={`${bgColorClassName} p-2 rounded-lg`}>
        <img src={icon} alt={`Icon for ${title} quiz.`} />
      </div>
      <h2 className="text-blue-900 text-preset-4-mobile">{title}</h2>
    </button>
  );
}
