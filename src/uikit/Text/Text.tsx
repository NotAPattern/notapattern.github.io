import { Component, JSX } from 'solid-js';
import styles from './Text.module.sass';
import { ThemeKeys } from '@types';

export type TextProps = {
  theme?: ThemeKeys;
  children?: JSX.Element;
};

const Text: Component<TextProps> = (props) => {
  const { ...otherProps } = props;

  return (
    <p
      class={styles.Text}
      {...otherProps}
    >
      {props.children}
    </p>
  );
};

export default Text;
