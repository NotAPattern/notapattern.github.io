import styles from "./ChipMenu.module.sass";
import { Component, JSX } from "solid-js";

export type ChipMenuProps = {
  selected?: boolean;
  children: JSX.Element;
};

const ChipMenu: Component<ChipMenuProps> = (props) => {
  return (
    <nav
      classList={{
        [styles.ChipMenu]: true,
      }}
    >
      {props.children}
    </nav>
  );
};

export default ChipMenu;