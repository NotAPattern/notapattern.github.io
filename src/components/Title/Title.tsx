import styles from "./Title.module.sass";
import { Component, JSX } from "solid-js";
import { Theme, ThemeStrategy } from "@shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

export type TitleProps = {
  children: string | JSX.Element;
  theme?: Theme;
};

const titleThemeStrategy: ThemeStrategy = {
  light: styles.Title_theme_light,
  dark: styles.Title_theme_dark,
};

const Title: Component<TitleProps> = (props) => {
  const theme: Theme = props.theme ?? useTheme()?.[0]() ?? "light";

  return (
    <h1 classList={{ [styles.Title]: true, [titleThemeStrategy[theme]]: true }}>
      {props.children}
    </h1>
  );
};

export default Title;
