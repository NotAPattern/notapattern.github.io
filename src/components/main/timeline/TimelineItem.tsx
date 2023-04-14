import { Component, JSX } from "solid-js";
import styles from "./TimelineItem.module.sass";
import { useColor } from "./Timeline";

export type TimelineItemProps = {
  color?: string;
  children: JSX.Element;
};

const TimelineItem: Component<TimelineItemProps> = (props) => {
  const color = useColor();

  return (
    <li class={styles.TimelineItem}>
      <div class={styles.TimelineShape}>
        <div
          class={styles.TimelineIntervalSeparator}
          style={{ "background-color": color ?? "inherit" }}
        />
        <div
          class={styles.TimelineLine}
          style={{ "background-color": color ?? "inherit" }}
        />
        {/* <div
          class={styles.TimelineStop}
          style={{ "background-color": color ?? "inherit" }}
        >
          <div class={styles.TimelineStopInner} />
        </div>
        <div
          class={styles.TimelineLine}
          style={{ "background-color": color ?? "inherit" }}
        /> */}
      </div>
      {props.children}
    </li>
  );
};

export default TimelineItem;
