import styles from "./Chip.module.sass";
import { Component, JSX, createMemo } from "solid-js";
import { Breakpoint, Theme, ThemeStrategy } from "../../shared/types";
import { Dynamic } from "solid-js/web";
import { useTheme } from "../themeProvider/ThemeProvider";
import { TimelineSection } from "src/App";

// If you see simple solution think twice in TypeScript :)
type Tag =
  | keyof Pick<JSX.IntrinsicElements, "a">
  | keyof Pick<JSX.IntrinsicElements, "button">;

export type ChipProps = {
  size?: Breakpoint;
  as?: Tag;
  leftIcon?: JSX.Element;
  theme?: Theme;
  selected?: boolean;
  children: JSX.Element;
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void);
  href?: string;
  onClick?: () => (section: TimelineSection) => void;
  class: string[];
};

const chipThemeStrategy: ThemeStrategy = {
  light: styles.Chip_theme_light,
  dark: styles.Chip_theme_dark,
};

const Chip: Component<ChipProps> = (props) => {
  const {
    size = "m",
    as,
    leftIcon,
    children,
    ref,
    href,
    ...otherProps
  } = props;

  const Tag: Tag = as ?? "button";

  const theme = props.theme ?? useTheme()?.[0]() ?? "light";

  const selected = createMemo(() => props.selected);

  return (
    <Dynamic
      component={Tag}
      type={Tag === "button" ? "button" : undefined}
      ref={ref}
      href={href}
      classList={{
        [styles.Chip]: true,
        [styles.Chip_selected]: selected() ?? false,
        [chipThemeStrategy[theme]]: true,
      }}
      {...otherProps}
    >
      {children}
    </Dynamic>
  );
};

export default Chip;
