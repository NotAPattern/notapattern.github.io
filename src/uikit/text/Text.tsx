import { Component } from "solid-js";
import { Theme } from "src/shared/types";
import { useTheme } from "../themeProvider/ThemeProvider";

export type TextProps = {
  theme?: Theme;
  children?: string;
};

const Text: Component<TextProps> = (props) => {
  const theme = props.theme ?? useTheme()?.[0]() ?? "light";

  return <div>{props.children}</div>;
};

export default Text;
