import { Component } from "solid-js";
import { Theme } from "src/shared/types";
import { useTheme } from "../themeProvider/ThemeProvider";
import styles from "./Text.module.sass";

export type TextProps = {
  theme?: Theme;
  children?: string;
};

const Text: Component<TextProps> = (props) => {
  const theme = props.theme ?? useTheme()?.[0]() ?? "light";

  return <p class={styles.Text}>{props.children}</p>;
};

export default Text;
