import { Component, For } from 'solid-js';
import { Text, useTheme } from '@uikit';
import { createThemeInvoker } from '@shared/themeInvoker';
import { Education } from '@shared/data';
import { format } from 'date-fns';
import styles from './EducationList.module.sass';
import { Theme } from '../../types/theme';

type EducationListProps = {
  data: Education[];
  theme?: Theme;
};

const programmListPeriodThemeInvoker = createThemeInvoker(styles, 'ProgrammList__period');

const EducationList: Component<EducationListProps> = (props) => {
  const { globalTheme } = useTheme();
  const theme = () => props.theme ?? globalTheme() ?? Theme.LIGHT;

  return (
    <ul class={styles.EducationList}>
      <For each={props.data.reverse()}>{(education) => (
        <li class={styles.EducationList__item}>
          <h3 class={styles.EducationList__institution}>
            {education.institution.name}
          </h3>
          <ul class={styles.ProgrammList}>
            <For each={education.education.reverse()}>{(programm) => (
              <li class={styles.ProgrammList__item}>
                <Text
                  classList={{
                    [styles.ProgrammList__period]: true,
                    [programmListPeriodThemeInvoker[theme()]]: true,
                  }}
                >
                  <time>{format(programm.startDate, 'yyyy')}</time> –{' '}
                  <time>{format(programm.endDate, 'yyyy')}</time>
                </Text>
                <div>
                  <h4 class={styles.ProgrammList__degree}>{programm.degree}</h4>
                  <Text class={styles.ProgrammList__faculty}>
                    {programm.faculty?.name},
                  </Text>
                  <Text class={styles.ProgrammList__speciality}>
                    {programm.speciality}.
                  </Text>
                </div>
              </li>
            )}</For>
          </ul>
        </li>
      )}</For>
    </ul>
  );
};

export default EducationList;
