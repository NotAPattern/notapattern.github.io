import styles from "./Section.module.sass";
import { Component, JSX } from "solid-js";

type SectionProps = {
  title?: string | JSX.Element;
  children?: string | JSX.Element;
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
