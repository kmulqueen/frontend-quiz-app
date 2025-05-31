export type ThemeState = {
  isDarkMode: boolean;
};

export type ThemeContextValue = ThemeState & {
  toggleDarkMode: () => void;
};

type ToggleThemeAction = { type: "TOGGLE_THEME" };

export type ThemeAction = ToggleThemeAction;
