import { useReducer, type PropsWithChildren } from "react";
import type {
  ThemeState,
  ThemeContextValue,
  ThemeAction,
} from "../types/theme";
import { ThemeContext } from "./ThemeContext";

const initialState: ThemeState = {
  isDarkMode: false,
};

function themeReducer(state: ThemeState, action: ThemeAction): ThemeState {
  switch (action.type) {
    case "TOGGLE_THEME": {
      const toggledTheme = !state.isDarkMode;
      return {
        ...state,
        isDarkMode: toggledTheme,
      };
    }
    default:
      return {
        ...state,
      };
  }
}

export function ThemeProvider({ children }: PropsWithChildren) {
  const [themeState, dispatch] = useReducer(themeReducer, initialState);

  const ctx: ThemeContextValue = {
    ...themeState,
    toggleDarkMode() {
      dispatch({ type: "TOGGLE_THEME" });
    },
  };

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
}
