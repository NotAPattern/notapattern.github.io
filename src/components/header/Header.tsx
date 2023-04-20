import styles from "./Header.module.sass";
import { Component, JSX } from "solid-js";
import { Breakpoint, Theme, ThemeStrategy } from "@shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

export type HeaderProps = {
  size?: Breakpoint;
  leftIcon?: JSX.Element;
  theme?: Theme;
  selected?: boolean;
  children: JSX.Element;
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void);
  href?: string;
};

const headerThemeStrategy: ThemeStrategy = {
  light: styles.Header_theme_light,
  dark: styles.Header_theme_dark,
};

const Header: Component<HeaderProps> = (props) => {
  const theme: Theme = props.theme ?? useTheme()?.[0]() ?? "light";

  return (
    <h1
      classList={{ [styles.Header]: true, [headerThemeStrategy[theme]]: true }}
    >
      Notapattern
    </h1>
  );
};

export default Header;
