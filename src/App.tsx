import { additionalData, chipListData, educationData, headerData, skillData, workExperienceData } from '@shared/data';
import {
  AdditionalList,
  Blockquote,
  ChangeTheme,
  ChipList,
  EducationList,
  Header,
  JobList,
  Section,
  SkillList,
} from '@components';
import { Button, useTheme } from '@uikit';
import { Component } from 'solid-js';
import { createThemeInvoker } from '@shared/themeInvoker';
import { format } from 'date-fns';
import { formatTotalWorkExperience } from '@shared/formatTotalWorkExperience';
import styles from './App.module.sass';
import 'normalize.css';

const appThemeInvoker = createThemeInvoker(styles, 'App');
const createDateThemeInvoker = createThemeInvoker(styles, 'CreateDate');

const App: Component = () => {
  const { globalTheme } = useTheme();

  return (
    <div
      classList={{ [styles.App]: true, [appThemeInvoker[globalTheme()]]: true }}
    >
      <div class={styles.AppWrapper}>
        <Header description={headerData.description} title={headerData.title} faceSrc={headerData.faceSrc} />
        <main>
          <div class={styles.MainWrapper}>
            <ChangeTheme />
            <Section>
              <ChipList data={chipListData}/>
            </Section>
            <Section title="🛠️ Навыки">
              <SkillList data={skillData} />
            </Section>
            <Section
              title={`💼 Опыт работы:  
              ${formatTotalWorkExperience(workExperienceData)}`}
            >
              <JobList data={workExperienceData} />
            </Section>
            <Section title="🎓 Образование" avoidBreak>
              <EducationList data={educationData} />
            </Section>
            {/* <Section title="📜 Сертификаты"></Section> */}
            <Section title="📝 Дополнительно">
              <AdditionalList data={additionalData}/>
              <Blockquote
                text="А программирование в принципе — если вы ленивы настолько,
                                что готовы работать сутки,
                                чтобы потом компьютер сделал вашу работу за минуту."
                source="Программист: зарплата, что делает, как стать и где учиться"
                link="https://journal.tinkoff.ru/programmer/"
              />
              <Blockquote
                text="... Этот вариант грустный, и обычно он является следствием
                                того, что человек, не верит в свои силы или находится в
                                плену у лени. Веру в себя — это к психологу, а с ленью нужно
                                бороться."
                source="Список вопросов и ответов для собеседования javascript разработчиков﻿"
                link="hhttps://maxpfrontend.ru/vebinary/voprosy-dlya-sobesedovaniya-javascript-razrabotchika/"
              />
              <Blockquote
                text="Ты то, что ты ешь"
                source="Гиппократ"
              />
            </Section>
          </div>
        </main>
        <footer>
          <div
            classList={{
              [styles.CreateDate]: true,
              [createDateThemeInvoker[globalTheme()]]: true,
            }}
          >
            Резюме создано <time>{format(new Date(), 'dd.MM.yyyy')}</time>
            <br />
            ❤️ with{' '}
            <a href="https://www.solidjs.com/" rel="noreferrer" target="_blank">
              SolidJS
            </a>
          </div>
          <Button onClick={() => window.print()} class={styles.PrintButton}>Распечатать резюме</Button>
        </footer>
      </div>
    </div>
  );
};

export default App;
