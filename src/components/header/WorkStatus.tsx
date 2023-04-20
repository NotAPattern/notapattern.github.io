import styles from "./WorkStatus.module.sass";
import { Component, JSX } from "solid-js";
import { Theme } from "@shared/types";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";

export type WorkStatus = "find" | "haired";

export type WorkStatusProps = {
  status: WorkStatus | JSX.Element;
};

const workStatusColor: { [k in WorkStatus]: CSSModuleClasses[string] } = {
  find: styles.WorkStatus_find,
  haired: styles.WorkStatus_haired,
};

const workStatusText: { [k in WorkStatus]: string } = {
  find: "в поиске работы.",
  haired: "работаю.",
};

// const workStatusThemeStrategy: ThemeStrategy = {
//   light: styles.WorkStatus_theme_light,
//   dark: styles.WorkStatus_theme_dark,
// };

const WorkStatus: Component<WorkStatusProps> = (props) => {
  const theme: Theme = useTheme()?.[0]() ?? "light";

  return (
    <p
      classList={{
        [styles.WorkStatus]: true,
      }}
    >
      Статус:
      <span
        classList={{
          [typeof props.status === "function"
            ? ""
            : workStatusColor[props.status as WorkStatus]]: true,
        }}
      >
        {typeof props.status === "function"
          ? props.status
          : " " + workStatusText[props.status as WorkStatus]}
      </span>
    </p>
  );
};

export default WorkStatus;
