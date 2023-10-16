import { Component } from 'solid-js';
import styles from './Blockquote.module.sass';
import { Text } from '@uikit';

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