import { Component } from 'solid-js';
import styles from './ChangeTheme.module.sass';
import { ThemeInvoker } from '@shared/types';
import { useTheme } from '@uikit';

const changeThemeInvoker: ThemeInvoker = {
  light: styles.ChangeTheme_theme_light,
  dark: styles.ChangeTheme_theme_dark,
};

const ChangeTheme: Component = () => {
  const [theme, setTheme] = useTheme()!;

  return (
    <button
      classList={{
        [styles.ChangeTheme]: true,
        [changeThemeInvoker[theme()]]: true,
      }}
      onClick={() => setTheme(theme() === 'light' ? 'dark' : 'light')}
    ></button>
  );
};

export default ChangeTheme;
