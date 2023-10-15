import { Theme, ThemeKeys } from '../types/theme';

export type ThemeInvoker = { [k in Theme]: string };
type CSSModuleClasses = { readonly [key: string]: string };

export const createThemeInvoker = (styles: CSSModuleClasses, componentName: string): ThemeInvoker => {
  return (Object.keys(Theme) as (ThemeKeys)[])
    .reduce((acc, key) => ({ ...acc, [Theme[key]]: styles[`${componentName}_theme_${key.toLocaleLowerCase()}`] }), {}) as ThemeInvoker;
};