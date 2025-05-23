type HeaderProps = {
  section?: string;
  icon?: string | null;
};

export default function Header({ section, icon }: HeaderProps) {
  return (
    <header className="px-6 py-4">
      <div className="flex items-center gap-4">
        {icon && <img src={icon} alt={`Icon for ${section} section.`} />}
        <p className="text-preset-4-mobile">{section}</p>
      </div>
    </header>
  );
}
