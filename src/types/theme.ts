export type ThemeState = {
  isDarkMode: boolean;
};

export type ThemeContextValue = ThemeState & {
  toggleDarkMode: () => void;
};

type ToggleThemeAction = { type: "TOGGLE_THEME" };
type InitializeThemeAction = { type: "INITIALIZE_THEME"; payload: boolean };

export type ThemeAction = ToggleThemeAction | InitializeThemeAction;
