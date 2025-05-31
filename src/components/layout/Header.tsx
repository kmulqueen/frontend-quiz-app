import DarkModeToggle from "./DarkModeToggle";
import IconWithSection from "./IconWithSection";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 sm:px-16 sm:py-10 xl:px-32 xl:py-20">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <IconWithSection section="" />
      <DarkModeToggle />
    </header>
  );
}
