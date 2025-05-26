type IconProps = {
  bgColorClassName: string;
  icon: string;
  title: string;
};

export default function Icon({ bgColorClassName, icon, title }: IconProps) {
  return (
    <div className={`rounded-lg ${bgColorClassName} p-2`}>
      <img src={icon} alt={`Icon for ${title} quiz.`} />
    </div>
  );
}
