import { Component, JSX } from 'solid-js';
import styles from './Section.module.sass';

type SectionProps = {
  title?: JSX.Element | string;
  children?: JSX.Element | string;
};

const Section: Component<SectionProps> = (props) => {
  return (
    <section class={styles.Section}>
      <h2 class={styles.SectionHeader}>{props.title}</h2>
      {props.children}
    </section>
  );
};

export default Section;
