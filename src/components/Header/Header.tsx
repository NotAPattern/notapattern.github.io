import { Component, JSX } from 'solid-js';
import { Text, useTheme } from '@uikit';
import { createThemeInvoker } from '@shared/themeInvoker';
import styles from './Header.module.sass';
import { Theme } from '@types';

export type HeaderProps = {
  description?: JSX.Element | string;
  children?: JSX.Element | string;
  faceSrc?: string;
  title: JSX.Element;
  theme?: Theme;
};

const headerThemeInvoker = createThemeInvoker(styles, 'Header');

const Header: Component<HeaderProps> = (props) => {
  const { globalTheme } = useTheme();
  const componentTheme = () => props.theme ?? globalTheme() ?? 'light';

  return (
    <header classList={{ [styles.Header]: true }}>
      <div class={styles.Header__wrapper}>
        <h1 classList={{ [styles.Header__title]: true, [headerThemeInvoker[componentTheme()]]: true }}>
          {props.title}
        </h1>
        <Text>{props.description}</Text>
      </div>
      <img class={styles.Header__face} height={128} width={128} src={props.faceSrc ?? ''} alt='Фото профиля'/>
    </header>
  );
};

export default Header;
