import { Component } from 'solid-js';
import { createThemeInvoker } from '@shared/themeInvoker';
import styles from './ChangeTheme.module.sass';
import { Theme } from '../../types/theme';
import { useTheme } from '@uikit';

const changeThemeInvoker = createThemeInvoker(styles, 'ChangeTheme');

const ChangeTheme: Component = () => {
  const { globalTheme, setGlobalTheme } = useTheme();

  return (
    <button
      classList={{
        [styles.ChangeTheme]: true,
        [changeThemeInvoker[globalTheme()]]: true,
      }}
      onClick={() => setGlobalTheme(globalTheme() === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    />
  );
};

export default ChangeTheme;
