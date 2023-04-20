import { WorkExperience } from "src/shared/data";
import styles from "./JobList.module.sass";
import { Component } from "solid-js";
import { format } from "date-fns";
import { Theme, ThemeStrategy } from "@shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

type JobsListProps = {
  data: WorkExperience[];
  theme?: Theme;
};

const jobListPeriodThemeStrategy: ThemeStrategy = {
  light: styles.JobList__period_theme_light,
  dark: styles.JobList__period_theme_dark,
};

const JobList: Component<JobsListProps> = (props) => {
  const theme = props.theme ?? useTheme()?.[0] ?? "light";
  return (
    <ul class={styles.JobList}>
      {props.data.reverse().map((job) => (
        <li class={styles.JobList__item}>
          <h3 class={styles.JobList__employer}>
            {job.employer.name}{" "}
            <span
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
            </span>
          </h3>
          {job.projects?.map((project) => (
            <ul style={styles.JobList__projectList}>
              <li>
                <a class={styles.JobList__projectItem} href={project.url}>
                  {project.name}
                </a>
              </li>
            </ul>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default JobList;
