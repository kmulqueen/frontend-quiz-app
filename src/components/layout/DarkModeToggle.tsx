import { useTheme } from "../../contexts/useTheme";
import MoonDark from "./ToggleIcons/MoonDark";
import MoonLight from "./ToggleIcons/MoonLight";
import SunDark from "./ToggleIcons/SunDark";
import SunLight from "./ToggleIcons/SunLight";

export default function DarkModeToggle() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  function handleChange() {
    toggleDarkMode();
  }

  return (
    <div className="flex items-center gap-2">
      {isDarkMode ? <SunLight /> : <SunDark />}

      <label className="switch">
        <input
          type="checkbox"
          name="dark-mode-toggle"
          onChange={handleChange}
        />
        <span className="slider round"></span>
      </label>

      {isDarkMode ? <MoonLight /> : <MoonDark />}
    </div>
  );
}
