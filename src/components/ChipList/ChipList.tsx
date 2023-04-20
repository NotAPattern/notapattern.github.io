import styles from "./ChipList.module.sass";
import { Component, JSX } from "solid-js";

export type ChipListProps = {
  selected?: boolean;
  children: JSX.Element;
};

const ChipList: Component<ChipListProps> = (props) => {
  return (
    <nav
      classList={{
        [styles.ChipList]: true,
      }}
    >
      {props.children}
    </nav>
  );
};

export default ChipList;
