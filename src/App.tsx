import { ChangeTheme, ChipList, EducationList, JobList, Section, SkillList, Title } from './components';
import { Chip, Text, useTheme } from '@uikit';
import { educationData, skillData, workExperienceData } from '@shared/data';
import { format, intervalToDuration } from 'date-fns';
import { Component } from 'solid-js';
import { createThemeInvoker } from '@shared/themeInvoker';
import { formatTotalWorkExperience } from './shared/formatTotalWorkExperience';
import { noun as pluralNoun } from 'plural-ru';
import styles from './App.module.sass';
import Telegram from './assets/telegram.svg';
import 'normalize.css';


const appThemeInvoker = createThemeInvoker(styles, 'App');
const createDateThemeInvoker = createThemeInvoker(styles, 'CreateDate');

const App: Component = () => {
  const { globalTheme } = useTheme();

  const age = intervalToDuration({
    start: new Date(1999, 2, 27),
    end: new Date(),
  }).years!;

  return (
    <div classList={{ [styles.App]: true, [appThemeInvoker[globalTheme()]]: true }}>
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
                <Chip
                  as="a"
                  href="https://t.me/notapattern"
                  leftIcon={<Telegram />}
                  target="_blank"
                >
                  Telegram
                </Chip>
              </ChipList>
              <Text>
                Мне {age.toString()} {pluralNoun(age, 'год', 'года', 'лет')},
                занимаюсь front end разработкой. Увлекаюсь стоицизмом, люблю
                музыку.
              </Text>
              <blockquote cite="https://journal.tinkoff.ru/programmer/">
                <Text>
                  <i>
                    «А программирование в принципе — если вы ленивы настолько,
                      что готовы работать сутки, чтобы потом компьютер сделал вашу
                      работу за минуту.»
                  </i>
                </Text>
                <br />
                <cite>
                  <a
                    class={styles.Source}
                    href="https://journal.tinkoff.ru/programmer/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Программист: зарплата, что делает, как стать и где учиться
                  </a>
                </cite>
              </blockquote>
              <blockquote>
                <Text>
                  <i>
                    «... Этот вариант грустный, и обычно он является следствием
                    того, что человек, не верит в свои силы или находится в
                    плену у лени. Веру в себя — это к психологу, а с ленью нужно
                    бороться.»
                  </i>
                </Text>
                <br />
                <cite>
                  <a
                    class={styles.Source}
                    href="https://maxpfrontend.ru/vebinary/voprosy-dlya-sobesedovaniya-javascript-razrabotchika/"
                    rel="noreferrer"
                    target="_blank"
                  >
                    Список вопросов и ответов для собеседования javascript разработчиков﻿
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
              [createDateThemeInvoker[globalTheme()]]: true,
            }}
          >
            Резюме создано <time>{format(new Date(), 'dd.MM.yyyy')}</time><br />
            ❤️ with{' '}
            <a
              href="https://www.solidjs.com/"
              rel="noreferrer"
              target="_blank"
            >
              SolidJS
            </a>
          </div>
          <button
            class={styles.PrintButton}
            onClick={() => window.print()}
          >Распечатать резюме</button>
        </footer>
      </div>
    </div>
  );
};

export default App;
