import { Component, For, JSX } from 'solid-js';
import styles from './AdditionalList.module.sass';

type AdditionalListProps = {
  data: JSX.Element[];
};

const AdditionalList: Component<AdditionalListProps> = (props) => {

  return (
    <ul class={styles.AdditionalList}>
      {<For each={props.data}>{(additional) => (
        <li>
          {additional}
        </li>
      )}</For>}
    </ul>
  );
};

export default AdditionalList;