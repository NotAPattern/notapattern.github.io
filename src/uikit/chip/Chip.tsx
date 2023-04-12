import styles from "./Chip.module.sass";
import { JSX } from "solid-js";
import { Breakpoint, Theme } from "../../shared/types";
import { Dynamic } from "solid-js/web";

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
};

type Chip<P = ChipProps> = (props: P) => JSX.Element;

const Chip: Chip = (props) => {
  const {
    size = "m",
    as,
    leftIcon,
    theme,
    selected,
    children,
    ref,
    href,
    ...otherProps
  } = props;

  const Tag: Tag = as ?? "button";

  return (
    <Dynamic
      component={Tag}
      ref={ref}
      href={href}
      classList={{
        [styles.Chip]: true,
        [styles.Chip_selected]: selected ?? false,
      }}
      {...otherProps}
    >
      {children}
    </Dynamic>
  );
};

export default Chip;
