import { Component, JSX } from 'solid-js';
import styles from './Text.module.sass';
import { Theme } from 'src/shared/types';

export type TextProps = {
  theme?: Theme;
  children?: JSX.Element;
};

const Text: Component<TextProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <p class={styles.Text} {...otherProps}>
      {props.children}
    </p>
  );
};

export default Text;
