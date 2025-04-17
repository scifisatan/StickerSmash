type ThemeColors = {
  background: string;
  foreground: string;
};

const darkTheme: ThemeColors = {
  background: "#25292e",
  foreground: "#fff",
};

const lightTheme: ThemeColors = {
  background: "#ffffff",
  foreground: "#2d3436",
};

const themes = {
  light: lightTheme,
  dark: darkTheme,
};

const IMAGE_WIDTH = 320;
const IMAGE_HEIGHT = 440;

const BG_COLOR = darkTheme.background;
const FOREGROUND_COLOR = darkTheme.foreground;
const HIGHLIGHT_COLOR = "#61dafb";
const PRIMARY_COLOR = "#FFA500dd";

export {
  IMAGE_HEIGHT,
  IMAGE_WIDTH,
  themes,
  BG_COLOR,
  FOREGROUND_COLOR,
  HIGHLIGHT_COLOR,
  PRIMARY_COLOR,
};
