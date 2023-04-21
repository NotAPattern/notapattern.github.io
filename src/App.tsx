import { Component } from "solid-js";
import styles from "./App.module.sass";
import ChipList from "./components/ChipList/ChipList";
import Chip from "@uikit/chip/Chip";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";
import { ThemeStrategy } from "@shared/types";
import "normalize.css";
import Title from "./components/Title/Title";
import Section from "./Section/Section";
import Text from "@uikit/text/Text";
import { educationData, skillData, workExperienceData } from "@shared/data";
import { formatTotalWorkExperience } from "./shared/formatTotalWorkExperience";
import JobList from "./components/JobList/JobList";
import EducationList from "./components/EducationList/EducationList";
import SkillList from "./components/SkillList/SkillList";
// import "@shared/paged.js";

const appThemeStrategy: ThemeStrategy = {
  light: styles.App_theme_light,
  dark: styles.App_theme_dark,
};

const App: Component = () => {
  const [theme, setTheme] = useTheme()!;

  return (
    <div classList={{ [styles.App]: true, [appThemeStrategy[theme()]]: true }}>
      <div class={styles.AppWrapper}>
        <header class={styles.Header}>
          <Title>Notapattern</Title>
        </header>
        <main>
          <div class={styles.MainWrapper}>
            {/* <button
              style={{ "align-self": "center" }}
              onClick={() => setTheme(theme() === "light" ? "dark" : "light")}
            >
              Change theme
            </button> */}
            <Section title="Привет 👋, меня зовут Никита Карацев">
              <ChipList>
                <Chip
                  as="a"
                  href="mailto:nikita.karatsev@gmail.com"
                  target="_blank"
                >
                  📧 nikita.karatsev@gmail.com
                </Chip>
                <Chip
                  as="a"
                  href="https://notapattern.github.io"
                  target="_blank"
                >
                  Сайт
                </Chip>
              </ChipList>
              <Text>Мне 24 года, занимаюсь front end разработкой.</Text>
            </Section>
            <Section
              title={`💼 Опыт работы — 
              ${formatTotalWorkExperience(workExperienceData)}`}
            >
              <JobList data={workExperienceData} />
            </Section>
            <Section title="🛠️ Навыки">
              <SkillList data={skillData} />
            </Section>
            <Section title="🧑‍🎓 Образование">
              <EducationList data={educationData} />
            </Section>
            {/* <Section title="📜 Сертификаты"></Section> */}
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
