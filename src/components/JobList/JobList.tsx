import { Component, For } from 'solid-js';
import { createThemeInvoker } from '@/shared/themeInvoker';
import { format } from 'date-fns';
import styles from './JobList.module.sass';
import { Theme } from '@types';
import { useTheme } from '@uikit';
import { WorkExperience } from '@shared/data';

type JobListProps = {
  data: WorkExperience[];
  theme?: Theme;
};

const jobListPeriodThemeInvoker = createThemeInvoker(styles, 'JobList');

const JobList: Component<JobListProps> = (props) => {
  const { globalTheme } = useTheme();
  const theme = props.theme ?? globalTheme() ?? 'light';
  return (
    <ul class={styles.JobList}>
      <For each={props.data.reverse()}>{(job) => (
        <li class={styles.JobList__item}>
          <h3 class={styles.JobList__employer}>
            {job.employer.name}{' '}
            <small
              classList={{
                [styles.JobList__period]: true,
                [jobListPeriodThemeInvoker[theme]]: true,
              }}
            >
              (
              <time>
                {format(job.startDate, 'MM.yyyy')}
              </time>
              {' – '}
              {job.endDate === 'present'
                ? <time dateTime={Date.now().toString()}>сейчас</time>
                : <time>{format(job.endDate, 'MM.yyyy')}</time>}
              )
            </small>
          </h3>
          <ul class={styles.ProjectList}>
            {<For each={job.projects}>{(project) => (
              <li>
                <a
                  classList={{
                    [styles.ProjectList__item]: true,
                    [styles.ProjectList__item_link]:
                      project.url === undefined ? false : true,
                  }}
                  href={project.url}
                  rel="noreferrer"
                  target="_blank"
                >
                  {project.name}
                </a>
                <p class={styles.ProjectList__description}>
                  {project.description}
                </p>
              </li>
            )}</For>}
          </ul>
        </li>
      )}</For>
    </ul>
  );
};

export default JobList;
