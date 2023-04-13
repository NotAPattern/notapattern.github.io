import { Component, createSignal } from "solid-js";
import styles from "./App.module.sass";
import Header from "./header/components/Header";
import Greetings from "./header/components/Greetings";
import ChipMenu from "./header/components/ChipMenu";
import Chip from "@uikit/chip/Chip";
import Timeline from "./header/components/Timeline";
import { Theme } from "./shared/types";
import { useTheme } from "./uikit/themeProvider/ThemeProvider";

export type TimelineSection = "workProjects" | "events" | "aboutMe";

const appThemeStrategy: { [k in Theme]: CSSModuleClasses[string] } = {
  light: styles.App_theme_light,
  dark: styles.App_theme_dark,
};

const App: Component = () => {
  const [timelineSection, setTimelineSection] =
    createSignal<TimelineSection>("workProjects");

  const [theme, setTheme] = useTheme()!;

  return (
    <div classList={{ [styles.App]: true, [appThemeStrategy[theme()]]: true }}>
      <header class={styles.header}>
        <Header>NOTAPATTERN</Header>
        <Greetings>
          👋 <br></br>Я – Никита Карацев, <br></br>
          Сайт про меня 👨‍💻 <br></br>и мои достижения. 🏆
        </Greetings>
        <button
          onClick={() => setTheme(theme() === "light" ? "dark" : "light")}
        >
          Change theme
        </button>
        {/* <img src={logo} class={styles.logo} alt="logo" /> */}
        {/* <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p> */}
        {/* <a
            class={styles.link}
            href="https://github.com/solidjs/solid"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Solid
          </a> */}
      </header>
      <ChipMenu>
        <Chip
          selected={timelineSection() === "workProjects"}
          onClick={() => setTimelineSection("workProjects")}
        >
          Рабочие проекты
        </Chip>
        <Chip
          selected={timelineSection() === "events"}
          onClick={() => setTimelineSection("events")}
        >
          Мероприятия
        </Chip>
        <Chip
          selected={timelineSection() === "aboutMe"}
          onClick={() => setTimelineSection("aboutMe")}
        >
          Обо мне
        </Chip>
      </ChipMenu>
      <main>
        <Timeline>asdad</Timeline>
      </main>
    </div>
  );
};

export default App;
