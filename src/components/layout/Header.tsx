import IconWithSection from "./IconWithSection";

export default function Header() {
  return (
    <header className="px-6 py-4 sm:px-16 sm:py-10">
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip to main content
      </a>
      <IconWithSection section="" />
    </header>
  );
}
