import { Component, JSX } from 'solid-js';
import { Dynamic } from 'solid-js/web';
import styles from './Text.module.sass';
import { ThemeKeys } from '@types';

type Tag =
  | keyof Pick<JSX.IntrinsicElements, 'a'>
  | keyof Pick<JSX.IntrinsicElements, 'p'>;

export type TextProps = JSX.HTMLAttributes<HTMLLinkElement> &
  JSX.HTMLAttributes<HTMLParagraphElement> & {
    as?: Tag;
    children?: JSX.Element;
    localTheme?: ThemeKeys;
  };

const Text: Component<TextProps> = (props) => {
  const { as, children, ...otherProps } = props;

  const tag = as ?? 'p';

  return (
    <Dynamic
      component={tag}
      classList={{
        [styles.Text]: true,
        ...props.classList,
      }}
      {...otherProps}
    >
      {children}
    </Dynamic>
  );
};

export default Text;
