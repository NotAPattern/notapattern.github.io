import { Component } from "solid-js";
import styles from "./TimelineStopShape.module.sass";
import * as stylesItem from "./TimelineItem.module.sass";
import { useColor } from "./Timeline";

const TimelineStopShape: Component = () => {
  const color = useColor();

  return (
    <div class={styles.TimelineStopShape}>
      <div
        class={styles.TimelineStop}
        style={{ "background-color": color ?? "inherit" }}
      >
        <div class={styles.TimelineStopInner} />
      </div>
      <div
        class={stylesItem.TimelineLine}
        style={{ "background-color": color ?? "inherit" }}
      ></div>
    </div>
  );
};

export default TimelineStopShape;
