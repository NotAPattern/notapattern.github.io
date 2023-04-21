import { Education } from "src/shared/data";
import styles from "./EducationList.module.sass";
import { Component } from "solid-js";
import { format } from "date-fns";
import { Theme, ThemeStrategy } from "@shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

type EducationListProps = {
  data: Education[];
  theme?: Theme;
};

const programmListPeriodThemeStrategy: ThemeStrategy = {
  light: styles.ProgrammList__period_theme_light,
  dark: styles.ProgrammList__period_theme_dark,
};

const EducationList: Component<EducationListProps> = (props) => {
  const theme = props.theme ?? useTheme()?.[0] ?? "light";

  return (
    <ul class={styles.EducationList}>
      {props.data.reverse().map((education) => (
        <li class={styles.EducationList__item}>
          <h3 class={styles.EducationList__institution}>
            {education.institution.name}
          </h3>
          <ul class={styles.ProgrammList}>
            {education.education.reverse().map((programm) => (
              <li class={styles.ProgrammList__item}>
                <p
                  classList={{
                    [styles.ProgrammList__period]: true,
                    [programmListPeriodThemeStrategy[
                      typeof theme === "function" ? theme() : theme
                    ]]: true,
                  }}
                >
                  {format(programm.startDate, "yyyy")} –{" "}
                  {format(programm.endDate, "yyyy")}
                </p>
                <div>
                  <h4 class={styles.ProgrammList__degree}>{programm.degree}</h4>
                  <p class={styles.ProgrammList__faculty}>
                    {programm.faculty?.name},
                  </p>
                  <p class={styles.ProgrammList__speciality}>
                    {programm.speciality}.
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  );
};

export default EducationList;
