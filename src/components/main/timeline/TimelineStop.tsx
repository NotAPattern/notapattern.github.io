import { Component, JSX } from "solid-js";
import styles from "./TimelineStopShape.module.sass";
import { useColor } from "./Timeline";
import TimelineStopShape from "./TimelineStopShape";

export type TimelineStopProps = {
  children: JSX.Element;
};

const TimelineStop: Component<TimelineStopProps> = (props) => {
  const color = useColor();

  return (
    <div class={styles.TimelineStopWrapper}>
      {/* Stop circle */}
      <TimelineStopShape />
      {/* Content */}
      <div>{props.children}</div>
    </div>
  );
};

export default TimelineStop;
