import { Component, JSX } from "solid-js";
import { Theme } from "src/shared/types";
import { useTheme } from "../themeProvider/ThemeProvider";
import styles from "./Text.module.sass";

export type TextProps = {
  theme?: Theme;
  children?: JSX.Element;
};

const Text: Component<TextProps> = (props) => {
  const { ...otherProps } = props;
  const theme = props.theme ?? useTheme()?.[0]() ?? "light";

  return (
    <p class={styles.Text} {...otherProps}>
      {props.children}
    </p>
  );
};

export default Text;
