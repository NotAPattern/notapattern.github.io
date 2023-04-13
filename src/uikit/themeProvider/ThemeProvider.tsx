import {
  createSignal,
  createContext,
  useContext,
  JSX,
  Accessor,
  Setter,
} from "solid-js";
import { Theme } from "../../shared/types";

const ThemeContext = createContext<[Accessor<Theme>, Setter<Theme>]>();

type ThemeProviderProps = {
  theme: Theme;
  children: JSX.Element;
};

type ThemeProvider<P = ThemeProviderProps> = (props: P) => JSX.Element;

export const ThemeProvider: ThemeProvider = (props) => {
  const [theme, setTheme] = createSignal<Theme>(
    props.theme ? props.theme : "light"
  );

  return (
    <ThemeContext.Provider value={[theme, setTheme]}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export function useTheme() {
  return useContext(ThemeContext);
}
