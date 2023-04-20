import styles from "./Greetings.module.sass";
import { Component, JSX } from "solid-js";

type HeaderProps = {
  children: string | JSX.Element;
};

const HeaderProps: Component<HeaderProps> = (props) => {
  return <h2 class={styles.Header}>{props.children}</h2>;
};

export default HeaderProps;
