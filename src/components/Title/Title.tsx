import { Component, JSX } from 'solid-js';
import { createThemeInvoker } from '@shared/themeInvoker';
import styles from './Title.module.sass';
import { Theme } from '@types';
import { useTheme } from '@uikit';

export type TitleProps = {
  children: JSX.Element | string;
  theme?: Theme;
};

const titleThemeInvoker = createThemeInvoker(styles, 'Title');

const Title: Component<TitleProps> = (props) => {
  const { globalTheme } = useTheme();
  const componentTheme = props.theme ?? globalTheme() ?? 'light';

  return (
    <h1 classList={{ [styles.Title]: true, [titleThemeInvoker[componentTheme]]: true }}>
      {props.children}
    </h1>
  );
};

export default Title;
