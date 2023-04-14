import styles from "./Greetings.module.sass";
import { Component, JSX } from "solid-js";

type GreetingsProps = {
  children: JSX.Element;
};

const Greetings: Component<GreetingsProps> = (props) => {
  return <p classList={{ [styles.Greetings]: true }}>{props.children}</p>;
};

export default Greetings;
