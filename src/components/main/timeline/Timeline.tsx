import { Component, JSX, createContext, useContext } from "solid-js";
import { TimelineSection } from "src/App";
import styles from "./Timeline.module.sass";

export type TimelineProps = {
  color?: string;
  children: JSX.Element;
  name: TimelineSection;
};

const ColorContext = createContext<string>();

const Timeline: Component<TimelineProps> = (props) => {
  return (
    <ColorContext.Provider value={props.color}>
      <ul id={props.name} class={styles.Timeline}>
        {props.children}
      </ul>
    </ColorContext.Provider>
  );
};

export function useColor() {
  return useContext(ColorContext);
}

export default Timeline;
