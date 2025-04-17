import React, { createContext, useState, ReactNode } from "react";
import { useColorScheme, ColorSchemeName } from "react-native";

export const ThemeContext = createContext<{
  theme: ColorSchemeName;
  toggleTheme: () => void;
}>({
  theme: null,
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useColorScheme();
  const [theme, setTheme] = useState<ColorSchemeName>(systemColorScheme);

  const toggleTheme = async () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
