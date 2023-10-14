import { Text } from '@uikit';
import { Component, JSX } from 'solid-js';
import styles from './Blockquote.module.sass';

type BlockquoteProps= {
  text: string;
  source?: string;
  link?: string;
};

const Blockquote: Component<BlockquoteProps> = (props) => {
  return (
    <blockquote class={styles.Blockquote} cite={props.link}>
      <Text>
        <i>
          «{props.text}»
        </i>
      </Text>
      <br />
      <cite>
        <a
          class={styles.Source}
          href={props.link}
          rel="noreferrer"
          target="_blank"
        >
          {props.source}
        </a>
      </cite>
    </blockquote>);
};

export default Blockquote;