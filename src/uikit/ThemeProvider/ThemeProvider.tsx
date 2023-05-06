import {
  Accessor,
  createContext,
  createSignal,
  JSX,
  Setter,
  useContext,
} from 'solid-js';
import { Theme } from '../../shared/types';

const ThemeContext = createContext<[Accessor<Theme>, Setter<Theme>]>();

type ThemeProviderProps = {
  theme: Theme;
  children: JSX.Element;
};

type ThemeProvider<P = ThemeProviderProps> = (props: P) => JSX.Element;

const ThemeProvider: ThemeProvider = (props) => {
  const [theme, setTheme] = createSignal<Theme>(
    props.theme ? props.theme : 'light'
  );

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

function useTheme() {
  return useContext(ThemeContext);
}

export { ThemeProvider, useTheme };