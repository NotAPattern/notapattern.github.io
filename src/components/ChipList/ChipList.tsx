import { Component, JSX } from 'solid-js';
import styles from './ChipList.module.sass';

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
