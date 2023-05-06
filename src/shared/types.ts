export type Breakpoint = 'l' | 'm' | 's' | 'xl' | 'xs' | 'xxs';

export type Theme = 'dark' | 'light';

export type ThemeInvoker = { [k in Theme]: CSSModuleClasses[string] };
