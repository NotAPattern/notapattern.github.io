import { Breakpoint, Theme, ThemeKeys } from '../../types/theme';
import { Component, createMemo, JSX } from 'solid-js';
import { createThemeInvoker } from '@shared/themeInvoker';
import { Dynamic } from 'solid-js/web';
import styles from './Chip.module.sass';
import { useTheme } from '@uikit';

// If you see simple solution think twice in TypeScript :)
type Tag =
  | keyof Pick<JSX.IntrinsicElements, 'a'>
  | keyof Pick<JSX.IntrinsicElements, 'button'>;

type ChipProps = {
  [k: string]: unknown;
  children: JSX.Element;
  as?: Tag;
  leftIcon?: JSX.Element;
  theme?: ThemeKeys;
  selected?: boolean;
  size?: Breakpoint;
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void);
  href?: string;
};

const chipThemeInvoker = createThemeInvoker(styles, 'Chip');

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

  const { globalTheme } = useTheme();
  const theme = () => props.theme ?? globalTheme() ?? Theme.LIGHT;

  const Tag: Tag = as ?? 'button';

  const selected = createMemo(() => props.selected);

  return (
    <Dynamic
      classList={{
        [styles.Chip]: true,
        [styles.Chip_selected]: selected() ?? false,
        [styles.Chip_link]: as === 'a',
        [chipThemeInvoker[theme()]]:
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
      {children &&
      <span class={styles.Chip__children}>
        {children}
      </span>}
    </Dynamic>
  );
};

export default Chip;
