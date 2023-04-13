import {
  Component,
  For,
  Match,
  Switch,
  createEffect,
  createSignal,
  on,
} from "solid-js";
import Chip from "@uikit/chip/Chip";

import * as chipStyles from "@uikit/chip/Chip.module.sass";
import styles from "./App.module.sass";
import { ThemeProvider } from "@uikit/themeProvider/ThemeProvider";
import Header from "./header/components/Header";
import Greetings from "./header/components/Greetings";
import ChipMenu from "./header/components/ChipMenu";

export type TimelineSection = "workProjects" | "events" | "aboutMe";

const App: Component = () => {
  const [timelineSection, setTimelineSection] =
    createSignal<TimelineSection>("workProjects");

  const [render, setRender] = createSignal<number>(0);

  createEffect(() => {
    timelineSection();
    console.log(
      "Count of rerender:",
      setRender((r) => r + 1)
    );
  });

  const section = timelineSection();

  return (
    <ThemeProvider theme={"light"}>
      <div class={styles.App}>
        <header class={styles.header}>
          <Header>NOTAPATTERN</Header>
          <Greetings>
            👋 <br></br>Я – Никита Карацев, <br></br>
            Сайт про меня 👨‍💻 <br></br>и мои достижения. 🏆
          </Greetings>
          <ChipMenu>
            <Chip
              selected={timelineSection() === "workProjects"}
              onClick={() => setTimelineSection("workProjects")}
            >
              {section}
              {/* Рабочие проекты */}
            </Chip>
            <Chip
              selected={timelineSection() === "events"}
              onClick={() => setTimelineSection("events")}
            >
              Мероприятия
            </Chip>
            <Chip onClick={() => setTimelineSection("aboutMe")}>
              Личная жизнь
            </Chip>
          </ChipMenu>
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
      </div>
    </ThemeProvider>
  );
};

export default App;
