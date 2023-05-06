import { Accessor, Component, JSX } from 'solid-js';
import { Theme, ThemeInvoker } from '@shared/types';
import styles from './Title.module.sass';
import { useTheme } from '@uikit';

export type TitleProps = {
  children: JSX.Element | string;
  theme?: Theme;
};

const titleThemeInvoker: ThemeInvoker = {
  light: styles.Title_theme_light,
  dark: styles.Title_theme_dark,
};

const Title: Component<TitleProps> = (props) => {
  const theme: Accessor<Theme> | Theme = props.theme ?? useTheme()?.[0] ?? 'light';

  return (
    <h1 classList={{ [styles.Title]: true, [titleThemeInvoker[typeof theme === 'function' ? theme() : theme]]: true }}>
      {props.children}
    </h1>
  );
};

export default Title;
