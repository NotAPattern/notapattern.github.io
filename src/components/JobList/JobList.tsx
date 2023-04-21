import { WorkExperience } from "@shared/data";
import styles from "./JobList.module.sass";
import { Component } from "solid-js";
import { format } from "date-fns";
import { Theme, ThemeStrategy } from "@shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

type JobListProps = {
  data: WorkExperience[];
  theme?: Theme;
};

const jobListPeriodThemeStrategy: ThemeStrategy = {
  light: styles.JobList__period_theme_light,
  dark: styles.JobList__period_theme_dark,
};

const JobList: Component<JobListProps> = (props) => {
  const theme = props.theme ?? useTheme()?.[0] ?? "light";
  return (
    <ul class={styles.JobList}>
      {props.data.reverse().map((job) => (
        <li class={styles.JobList__item}>
          <h3 class={styles.JobList__employer}>
            {job.employer.name}{" "}
            <small
              classList={{
                [styles.JobList__period]: true,
                [jobListPeriodThemeStrategy[
                  typeof theme === "function" ? theme() : theme
                ]]: true,
              }}
            >
              ({format(job.startDate, "MM.yyyy") + " – "}
              {job.endDate === "present"
                ? "сейчас"
                : format(job.endDate, "MM.yyyy")}
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
