export type Breakpoint = 'l' | 'm' | 's' | 'xl' | 'xs' | 'xxs';

export enum Theme { DARK = 'DARK', LIGHT = 'LIGHT' }

export type ThemeKeys = keyof typeof Theme;

export type ThemeInvoker = { [k in Theme]: CSSModuleClasses[string] };
