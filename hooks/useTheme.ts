import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";
import { themes } from "@/constants";

export function useTheme() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const colors = themes[theme as keyof typeof themes];

  return {
    theme,
    toggleTheme,
    colors,
  };
}
