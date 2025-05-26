type HeaderProps = {
  section?: string;
  icon?: string | null;
};

export default function Header({ section, icon }: HeaderProps) {
  return (
    <header className="px-6 py-4">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <div className="flex items-center gap-4">
        {icon && <img src={icon} alt={`${section} quiz`} />}
        <p className="text-preset-4-mobile">{section}</p>
      </div>
    </header>
  );
}
