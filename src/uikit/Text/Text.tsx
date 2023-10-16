import { Component, JSX } from 'solid-js';
import styles from './Text.module.sass';
import { ThemeKeys } from '@types';

export type TextProps = JSX.HTMLAttributes<HTMLParagraphElement> & {
  theme?: ThemeKeys;
  children?: JSX.Element;
};

const Text: Component<TextProps> = (props) => {
  return (
    <p
      classList={{ [styles.Text]: true, ...props.classList }}
      {...props}
    >
      {props.children}
    </p>
  );
};

export default Text;
