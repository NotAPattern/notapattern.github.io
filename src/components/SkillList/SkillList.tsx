import { Component, For } from 'solid-js';
import { Skill } from '@shared/data';
import styles from './SkillList.module.sass';
import { Theme } from '@types';

type SkillListProps = {
  data: Skill[];
  theme?: Theme;
};

const SkillList: Component<SkillListProps> = (props) => {
  return (
    <ul class={styles.SkillList}>
      <For each={props.data}>{(skill) => (
        <li class={styles.SkillList__item}>
          <h3 class={styles.SkillList__name}>{skill.name}: </h3>
          <For each={skill.skill}>{(icon) => icon}</For>
        </li>
      )}</For>
    </ul>
  );
};

export default SkillList;
