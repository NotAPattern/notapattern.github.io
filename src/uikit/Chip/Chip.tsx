import { Accessor, Component, createMemo, JSX } from 'solid-js';
import { Breakpoint, Theme, ThemeInvoker } from '@shared/types';
import { Dynamic } from 'solid-js/web';
import styles from './Chip.module.sass';
import { useTheme } from "@uikit";

// If you see simple solution think twice in TypeScript :)
type Tag =
  | keyof Pick<JSX.IntrinsicElements, 'a'>
  | keyof Pick<JSX.IntrinsicElements, 'button'>;

type ChipProps = {
  [k: string]: unknown;
  children: JSX.Element;
  as?: Tag;
  leftIcon?: JSX.Element;
  theme?: Theme;
  selected?: boolean;
  size?: Breakpoint;
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void);
  href?: string;
};

const chipThemeInvoker: ThemeInvoker = {
  light: styles.Chip_theme_light,
  dark: styles.Chip_theme_dark,
};

const Chip: Component<ChipProps> = (props) => {
  const {
    // size = 'm',
    as,
    children,
    href,
    leftIcon,
    ref,
    ...otherProps
  } = props;

  const Tag: Tag = as ?? 'button';

  const theme: Accessor<Theme> | Theme = props.theme ?? useTheme()?.[0] ?? 'light';

  const selected = createMemo(() => props.selected);

  return (
    <Dynamic
      classList={{
        [styles.Chip]: true,
        [styles.Chip_selected]: selected() ?? false,
        [styles.Chip_link]: as === 'a',
        [chipThemeInvoker[typeof theme === 'function' ? theme() : theme]]:
          true,
      }}
      component={Tag}
      href={href}
      ref={ref}
      type={Tag === 'button' ? 'button' : undefined}
      {...otherProps}
    >
      {leftIcon &&
        <span class={styles.Chip__icon}>
          {leftIcon}
        </span>
      }
      {children}
    </Dynamic>
  );
};

export default Chip;
