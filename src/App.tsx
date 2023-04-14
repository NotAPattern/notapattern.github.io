import { Component, Match, Switch, createSignal } from "solid-js";
import styles from "./App.module.sass";
import Header from "./components/header/Header";
import Greetings from "./components/header/Greetings";
import ChipMenu from "./components/menu/ChipMenu";
import Chip from "@uikit/chip/Chip";
import Timeline from "./components/main/timeline/Timeline";
import { Theme } from "./shared/types";
import { useTheme } from "./uikit/themeProvider/ThemeProvider";
import TimelineItem from "./components/main/timeline/TimelineItem";
import TimelineContent from "./components/main/timeline/TimelineContent";

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
        {/* <button
          onClick={() => setTheme(theme() === "light" ? "dark" : "light")}
        >
          Change theme
        </button> */}
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
          Опыт работы
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
        <Switch>
          <Match when={timelineSection() === "workProjects"}>
            <Timeline name="workProjects" color="#FCCA00">
              <TimelineItem>
                <TimelineContent>Cron design</TimelineContent>
              </TimelineItem>
              <TimelineItem>
                <TimelineContent>Smth </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Match>
          <Match when={timelineSection() === "events"}>
            <Timeline name="events">asdad</Timeline>
          </Match>
          <Match when={timelineSection() === "aboutMe"}>
            <Timeline name="aboutMe">asdad</Timeline>
          </Match>
        </Switch>
      </main>
    </div>
  );
};

export default App;
