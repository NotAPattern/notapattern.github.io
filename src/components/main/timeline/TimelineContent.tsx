import { Component, JSX } from "solid-js";
import styles from "./TimelineContent.module.sass";

export type TimelineContentProps = {
  color?: string;
  children: JSX.Element;
};

const TimelineContent: Component<TimelineContentProps> = (props) => {
  return (
    <div classList={{ [styles.TimelineContent]: true }}>{props.children}</div>
  );
};

export default TimelineContent;
