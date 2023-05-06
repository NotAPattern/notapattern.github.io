import { Component } from 'solid-js';
import { Skill } from '@shared/data';
import styles from './SkillList.module.sass';
import { Theme } from '@shared/types';

type SkillListProps = {
  data: Skill[];
  theme?: Theme;
};

const SkillList: Component<SkillListProps> = (props) => {
  return (
    <ul class={styles.SkillList}>
      {props.data.map((skill) => (
        <li class={styles.SkillList__item}>
          <h3 class={styles.SkillList__name}>{skill.name}: </h3>
          {skill.skill.map((icon) => icon)}
        </li>
      ))}
    </ul>
  );
};

export default SkillList;
