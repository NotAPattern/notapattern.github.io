import { Component, JSX } from 'solid-js';
import styles from './Section.module.sass';

type SectionProps = {
  title?: JSX.Element | string;
  children?: JSX.Element | string;
  avoidBreak?: boolean;
};

const Section: Component<SectionProps> = (props) => {
  return (
    <section classList={{ [styles.Section]: true, [styles.Section_avoidBreak]: props.avoidBreak }}>
      <h2 class={styles.SectionHeader}>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
