import { Component } from "solid-js";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";
import { ThemeStrategy } from "@shared/types";
import styles from "./ChangeTheme.module.sass";

const changeThemeStrategy: ThemeStrategy = {
  light: styles.ChangeTheme_theme_light,
  dark: styles.ChangeTheme_theme_dark,
};

const ChangeTheme: Component = () => {
  const [theme, setTheme] = useTheme()!;

  return (
    <button
      classList={{
        [styles.ChangeTheme]: true,
        [changeThemeStrategy[theme()]]: true,
      }}
      onClick={() => setTheme(theme() === "light" ? "dark" : "light")}
    ></button>
  );
};

export default ChangeTheme;
