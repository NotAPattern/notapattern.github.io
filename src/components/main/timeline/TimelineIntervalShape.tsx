import { Component } from "solid-js";
import styles from "./TimelineIntervalShape.module.sass";
import stylesItem from "./TimelineItem.module.sass";
import { useColor } from "./Timeline";

const TimelineIntervalShape: Component = () => {
  const color = useColor();

  return (
    <div class={styles.TimelineIntervalShape}>
      {/* Separator */}
      <div
        class={styles.TimelineIntervalSeparator}
        style={{ "background-color": color ?? "inherit" }}
      />
      {/* Line */}
      <div
        class={stylesItem.TimelineLine}
        style={{ "background-color": color ?? "inherit" }}
      />
    </div>
  );
};

export default TimelineIntervalShape;
