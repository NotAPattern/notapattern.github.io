import { Component } from "solid-js";
import styles from "./App.module.sass";
import ChipList from "./components/ChipList/ChipList";
import Chip from "@uikit/chip/Chip";
import { useTheme } from "@uikit/themeProvider/ThemeProvider";
import { ThemeStrategy } from "@shared/types";
import "normalize.css";
import Title from "./components/Title/Title";
import Section from "./components/Section/Section";
import Text from "@uikit/text/Text";
import { educationData, skillData, workExperienceData } from "@shared/data";
import { formatTotalWorkExperience } from "./shared/formatTotalWorkExperience";
import JobList from "./components/JobList/JobList";
import EducationList from "./components/EducationList/EducationList";
import SkillList from "./components/SkillList/SkillList";
import ChangeTheme from "./components/ChangeTheme/ChangeTheme";
import { format, intervalToDuration } from "date-fns";
// import "@shared/paged.js";
import { noun as pluralNoun } from "plural-ru";

const appThemeStrategy: ThemeStrategy = {
  light: styles.App_theme_light,
  dark: styles.App_theme_dark,
};

const createDateThemeStrategy: ThemeStrategy = {
  light: styles.CreateDate_theme_light,
  dark: styles.CreateDate_theme_dark,
};

const App: Component = () => {
  const [theme] = useTheme()!;

  const age = intervalToDuration({
    start: new Date(1999, 2, 27),
    end: new Date(),
  }).years!;

  return (
    <div classList={{ [styles.App]: true, [appThemeStrategy[theme()]]: true }}>
      <div class={styles.AppWrapper}>
        <header class={styles.Header}>
          <Title>Notapattern</Title>
        </header>
        <main>
          <div class={styles.MainWrapper}>
            <ChangeTheme />
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
                  🌐 notapattern.github.io
                </Chip>
              </ChipList>
              <Text>
                Мне {age.toString()} {pluralNoun(age, "год", "года", "лет")},
                занимаюсь front end разработкой. Увлекаюсь стоицизмом, люблю
                музыку.
              </Text>
              <blockquote cite="https://journal.tinkoff.ru/programmer/">
                <Text>
                  <i>
                    А программирование в принципе — если вы ленивы настолько,
                    что готовы работать сутки, чтобы потом компьютер сделал вашу
                    работу за минуту.
                  </i>
                </Text>
                <br></br>
                <cite>
                  <a
                    href="https://journal.tinkoff.ru/programmer/"
                    target="_blank"
                    class={styles.Source}
                  >
                    Источник
                  </a>
                </cite>
              </blockquote>
              <blockquote>
                <Text>
                  <i>
                    ... Этот вариант грустный, и обычно он является следствием
                    того, что человек, не верит в свои силы или находится в
                    плену у лени. Веру в себя — это к психологу, а с ленью нужно
                    бороться.
                  </i>
                </Text>
                <br></br>

                <cite>
                  <a
                    href="https://maxpfrontend.ru/vebinary/voprosy-dlya-sobesedovaniya-javascript-razrabotchika/"
                    target="_blank"
                    class={styles.Source}
                  >
                    Источник
                  </a>
                </cite>
              </blockquote>
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
        <footer>
          <div
            classList={{
              [styles.CreateDate]: true,
              [createDateThemeStrategy[theme()]]: true,
            }}
          >
            Резюме создано {format(new Date(), "dd.MM.yyyy")} <br></br>
            ❤️ with{" "}
            <a href="https://www.solidjs.com/" target="_blank">
              SolidJS
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default App;
