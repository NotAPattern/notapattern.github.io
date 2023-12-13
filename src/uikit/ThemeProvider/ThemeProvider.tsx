import {
  Accessor,
  createContext,
  createSignal,
  JSX,
  Setter,
  useContext,
} from 'solid-js';
import { Theme, ThemeKeys } from '@types';

type ThemeProviderProps = {
  theme?: ThemeKeys;
  children: JSX.Element;
};

type ContextType = ReturnType<typeof useThemeValue>;
type ThemeProvider<P = ThemeProviderProps> = (props: P) => JSX.Element;

function useThemeValue(defaultTheme?: ThemeKeys): {
  globalTheme: Accessor<ThemeKeys>;
  setGlobalTheme: Setter<ThemeKeys>;
} | undefined {
  const [globalTheme, setGlobalTheme] = createSignal(
    defaultTheme ?? Theme.LIGHT
  );
  return { globalTheme, setGlobalTheme };
}

const ThemeContext = createContext<ContextType>();

const ThemeProvider: ThemeProvider = (props) => {
  const children = () => props.children;

  // eslint-disable-next-line solid/reactivity
  const theme = useThemeValue(props.theme);

  return (
    <ThemeContext.Provider value={theme}>{children()}</ThemeContext.Provider>
  );
};

function useTheme() {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return useContext(ThemeContext)!;
}

export { ThemeProvider, useTheme };
