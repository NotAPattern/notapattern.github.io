import styles from "./Header.module.sass";
import { Component, JSX } from "solid-js";
import { Breakpoint, Theme } from "../../shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

export type TimelineProps = {
  size?: Breakpoint;
  leftIcon?: JSX.Element;
  theme?: Theme;
  selected?: boolean;
  children: JSX.Element;
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void);
  href?: string;
};

const timelineThemeStrategy: { [k in Theme]: CSSModuleClasses[string] } = {
  light: styles.Header_theme_light,
  dark: styles.Header_theme_dark,
};

const Timeline: Component<TimelineProps> = (props) => {
  const theme: Theme = props.theme ?? useTheme()?.[0]() ?? "light";

  return <section classList={{}}>{props.children}</section>;
};

export default Timeline;
