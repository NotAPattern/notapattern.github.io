import { Breakpoint, Theme, ThemeKeys } from '../../types/theme';
import { Component, JSX } from 'solid-js';
import { createThemeInvoker } from '@shared/themeInvoker';
import styles from './Button.module.sass';
import { useTheme } from '@uikit';

type ButtonProps = JSX.HTMLAttributes<HTMLButtonElement> & {
  children: JSX.Element;
  leftIcon?: JSX.Element;
  theme?: ThemeKeys;
  size?: Breakpoint;
  ref?: HTMLButtonElement | ((el: HTMLButtonElement) => void);
};

const buttonThemeInvoker = createThemeInvoker(styles, 'Button');

const Button: Component<ButtonProps> = (props) => {
  const {
    children,
    ...otherProps
  } = props;

  const { globalTheme } = useTheme();
  const theme = () => props.theme ?? globalTheme() ?? Theme.LIGHT;
  const classList = () => props.class;

  return (
    <button
      classList={{
        [styles.Button]: true,
        [buttonThemeInvoker[theme()]]:
          true,
        [classList() ?? '']: true
      }}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;

