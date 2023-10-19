import { Component, For } from 'solid-js';
import { Text, useTheme } from '@uikit';
import { createThemeInvoker } from '@/shared/themeInvoker';
import { format } from 'date-fns';
import styles from './JobList.module.sass';
import { Theme } from '@types';
import { WorkExperience } from '@shared/data';

type JobListProps = {
  data: WorkExperience[];
  theme?: Theme;
};

const jobListPeriodThemeInvoker = createThemeInvoker(styles, 'JobList');

const formatTypeOfEmployment = (typeOfEmployment: string) => {
  if (typeOfEmployment === 'distant') {
    return 'удаленная работа';
  }
  return typeOfEmployment;
};

const JobList: Component<JobListProps> = (props) => {
  const { globalTheme } = useTheme();
  const theme = () => props.theme ?? globalTheme() ?? Theme.LIGHT;
  return (
    <ul class={styles.JobList}>
      <For each={props.data.reverse()}>{(job) => (
        <>
          <li class={styles.JobList__item}>
            <Text
              classList={{
                [styles.JobList__period]: true,
                [jobListPeriodThemeInvoker[theme()]]: true,
              }}
            >
              <time>
                {format(job.startDate, 'MM.yyyy')}
              </time>
              {' – '}
              {job.endDate === 'present'
                ? <span>настоящее время</span>
                : <time dateTime={format(job.endDate, 'MM.yyyy')}>{format(job.endDate, 'MM.yyyy')}</time>}
            </Text>
            <div>
              <h3 class={styles.JobList__employer}>
                {job.employer.name}
              </h3>
              <Text>{job.vacancy}, {formatTypeOfEmployment(job.typeOfEmployment)}.</Text>
              <br/>
              <Text><b>Обязанности:</b></Text>
              <ul class={styles.ResponsibilitiesList}>
                {<For each={job.responsibilities}>{(responsibility) => (
                  <li>
                    {responsibility}
                  </li>
                )}</For>}
              </ul>
            </div>
          </li>
        </>
      )}</For>
    </ul>
  );
};

export default JobList;
