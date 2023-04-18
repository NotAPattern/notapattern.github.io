export type Breakpoint = "xxs" | "xs" | "s" | "m" | "l" | "xl";

export type Theme = "light" | "dark";

type ThemeStrategy = { [k in Theme]: CSSModuleClasses[string] };
