import {
  createSignal,
  createContext,
  useContext,
  JSX,
  Accessor,
} from "solid-js";
import { Theme } from "../../shared/types";

const ThemeContext =
  createContext<
    (Accessor<Theme> | { getTheme(): void; setTheme(theme: Theme): void })[]
  >();

type ThemeProviderProps = {
  theme: Theme;
  children: JSX.Element;
};

type ThemeProvider<P = ThemeProviderProps> = (props: P) => JSX.Element;

export const ThemeProvider: ThemeProvider = (props) => {
  const [theme, setTheme] = createSignal<Theme>(
    props.theme ? props.theme : "light"
  );

  const themer = [
    theme,
    {
      getTheme() {
        return theme;
      },
      setTheme(theme: Theme) {
        setTheme(theme);
      },
    },
  ];

  return (
    <ThemeContext.Provider value={themer}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
