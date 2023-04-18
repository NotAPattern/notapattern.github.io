import { Component, JSX } from "solid-js";
import styles from "./TimelineItem.module.sass";
import { useColor } from "./Timeline";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";
import { Theme, ThemeStrategy } from "@shared/types";
import TimelineIntervalShape from "./TimelineIntervalShape";
import TimelineStopShape from "./TimelineStopShape";
import TimelineStop from "./TimelineStop";

export type TimelineItemProps = {
  color?: string;
  children: JSX.Element;
  title?: string;
  description?: string;
};

const timelineTitleThemeStrategy: ThemeStrategy = {
  light: styles.TimelineTitle_theme_light,
  dark: styles.TimelineTitle_theme_dark,
};

const TimelineItem: Component<TimelineItemProps> = (props) => {
  const theme: Theme = useTheme()?.[0]() ?? "light";

  return (
    <li class={styles.TimelineItem}>
      <div class={styles.TimelineItemWrapper}>
        {/* Shape */}
        <TimelineIntervalShape />
        {/* Title */}
        <div
          classList={{
            [styles.TimelineTitle]: true,
            [timelineTitleThemeStrategy[theme]]: true,
          }}
        >
          <h2 class={styles.TimelineContent}>{props.title}</h2>
          <span class={styles.TimelineContent}>{props.description}</span>
        </div>
      </div>
      {props.children}
      {/*       {Array.isArray(props.children)
        ? props.children.map((el) => {
            return <div class={styles.TimelineStopWrapper}>{el}</div>;
          })
        : props.children} */}
    </li>
  );
};

export default TimelineItem;
