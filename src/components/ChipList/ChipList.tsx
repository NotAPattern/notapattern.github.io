import { Component, For, JSX } from 'solid-js';
import { Chip } from '@uikit';
import { ChipListData } from '@shared/data';
import styles from './ChipList.module.sass';

export type ChipListProps = {
  children?: JSX.Element;
  data?: ChipListData[];
  selected?: boolean;
};

const ChipList: Component<ChipListProps> = (props) => {
  return (
    <ul
      classList={{ [styles.ChipList]: true, }}
    >
      {props.data ?
        (
          <For each={props.data}>{(chip) => (
            <li class={styles.ChipList__item}>
              <Chip
                as='a'
                href={chip.link} 
                target="_blank"
                leftIcon={chip.icon}
              >
                {chip.title}
              </Chip>
            </li>)}
          </For> )
        : props.children}
    </ul>
  );
};

export default ChipList;
