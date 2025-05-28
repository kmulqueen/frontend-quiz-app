export function iconBgColor(section: string | undefined): string {
  let bgColorClassName: string;

  switch (section) {
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

  return bgColorClassName;
}
