import { Theme, ThemeInvoker } from '@shared/types';
import { Component } from 'solid-js';
import { format } from 'date-fns';
import styles from './JobList.module.sass';
import { useTheme } from '@uikit';
import { WorkExperience } from '@shared/data';

type JobListProps = {
  data: WorkExperience[];
  theme?: Theme;
};

const jobListPeriodThemeInvoker: ThemeInvoker = {
  light: styles.JobList__period_theme_light,
  dark: styles.JobList__period_theme_dark,
};

const JobList: Component<JobListProps> = (props) => {
  const theme = props.theme ?? useTheme()?.[0] ?? 'light';
  return (
    <ul class={styles.JobList}>
      {props.data.reverse().map((job) => (
        <li class={styles.JobList__item}>
          <h3 class={styles.JobList__employer}>
            {job.employer.name}{' '}
            <small
              classList={{
                [styles.JobList__period]: true,
                [jobListPeriodThemeInvoker[
                  typeof theme === 'function' ? theme() : theme
                ]]: true,
              }}
            >
              <time>
                ({format(job.startDate, 'MM.yyyy')}
              </time>
              {' – '}
              {job.endDate === 'present'
                ? <time datetime={Date.now().toString()}>сейчас</time>
                : <time>{format(job.endDate, 'MM.yyyy')}</time>}
              )
            </small>
          </h3>
          <ul class={styles.ProjectList}>
            {job.projects?.map((project) => (
              <li>
                <a
                  classList={{
                    [styles.ProjectList__item]: true,
                    [styles.ProjectList__item_link]:
                      project.url === undefined ? false : true,
                  }}
                  href={project.url}
                  target="_blank"
                >
                  {project.name}
                </a>
                <p class={styles.ProjectList__description}>
                  {project.description}
                </p>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default JobList;
