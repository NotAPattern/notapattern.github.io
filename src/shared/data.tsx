import Arch from '@assets/arch.svg';
import Css3 from '@assets/css3.svg';
import Docker from '@assets/docker.svg';
import Eslint from '@assets/eslint.svg';
import Face from '@assets/face.jpg';
import Figma from '@assets/figma.svg';
import Git from '@assets/git.svg';
import Github from '@assets/github.svg';
import GitHubBadge from '@assets/github-badge.svg';
import GitLab from '@assets/gitlab.svg';
import { HeaderProps } from '@components/Header/Header';
import Html5 from '@assets/html5.svg';
import { intervalToDuration } from 'date-fns';
import JavaScript from '@assets/javascript.svg';
import { JSX } from 'solid-js/jsx-runtime';
import Mui from '@assets/mui.svg';
import Neovim from '@assets/neovim.svg';
import NextJS from '@assets/next.svg';
import Php from '@assets/php.svg';
import { noun as pluralNoun } from 'plural-ru';
import React from '@assets/react.svg';
import ReactRouter from '@assets/react-router.svg';
import Redux from '@assets/redux.svg';
import Rust from '@assets/rust.svg';
import Sass from '@assets/sass.svg';
import SolidJS from '@assets/solidjs.svg';
import Storybook from '@assets/storybook.svg';
import Telegram from '@assets/telegram.svg';
import { Text } from '@uikit';
import TypeScript from '@assets/typescript.svg';
import Vite from '@assets/vite.svg';

export type WorkExperience = {
  employer: {
    name: string;
    url?: string;
  };
  startDate: Date;
  endDate: Date | 'present';
  vacancy: string;
  responsibilities?: JSX.Element[],
  projects?: {
    name: string;
    url?: string;
    description?: JSX.Element | string;
  }[];
  typeOfEmployment: string;
};

export type Education = {
  institution: { name: string };
  education: {
    startDate: Date;
    endDate: Date;
    degree?: string;
    faculty?: { name: string };
    speciality?: string;
  }[];
};

export type Skill = {
  name: string;
  skill: JSX.Element[];
};

export type ChipListData = {
  icon?: string;
  link: string;
  title: string;
};

const age = intervalToDuration({
  end: new Date(),
  start: new Date(1999, 2, 27),
}).years;

export const headerData: HeaderProps = {
  description: <>Мне {age?.toString()} {pluralNoun(age ?? 0, 'год', 'года', 'лет')}. Занимаюсь front end разработкой из Омска.</>, 
  faceSrc: Face,
  title: <>Привет 👋, <br /> я Никита Карацев</>
};

export const chipListData: ChipListData[] = [
  {
    icon: '📧', link: 'mailto:nikita.karatsev@gmail.com', title: 'nikita.karatsev@gmail.com'
  },
  {
    icon: Github, link: 'https://github.com/notapattern', title: 'github.com/notapattern'
  },
  {
    icon: '🌐', link: 'https://notapattern.github.io', title: 'notapattern.github.io'
  },
  {
    icon: Telegram, link: 'https://t.me/notapattern', title: 't.me/notapattern'
  },
  {
    icon: Telegram, link: 'https://t.me/notapatternblog', title: 't.me/notapatternblog'
  },
];

export const workExperienceData: WorkExperience[] = [
  {
    employer: {
      name: 'ООО "Кронмедиа"',
      url: 'https://cron.design',
    },
    endDate: new Date(2022, 10, 25),
    responsibilities: [
      <Text>Разработка фитнес-приложения <a href='https://trnr.ru/' target='_blank'>trnr.ru</a> 💪.
        <ul>
          <li>Ответственность за разбиение Figma макетов на компоненты и их программирование на React.</li>
          <li>Работа в режиме 2-х недельных спринтов.</li>
          <li>Типизация ~98% кода с помощью TypeScript.</li>
          <li>Автономная разработка проекта с выбором библиотек и архитектуры, а также работа в команде.</li>
          <li>🏆 Было написано 61661 строк кода (~81% проекта). Для измерения использовалась команда <code>git summary --line</code></li>
        </ul>
      </Text>,
      <Text>Верстка для сайта проверки сотруднков.
        <ul>
          <li>Практика методологии БЭМ.</li>
          <li>Верстка шаблона отчета для A4 PDF с использованием paged.js. Пример отчета можно посмотреть <a href='https://drive.google.com/file/d/1YzgMchVI5KendKjMdQ9G-p01i5Xjak5M/view?usp=sharing' target='_blank'>здесь</a>.</li>
          <li>Верстка email писем для отчетов.</li>
          <li>🏆 Успешно проходит Lighthouse метрики (performance: 95, accessibility: 91, best practices: 100, SEO: 100), валидатор W3.</li>
        </ul>
      </Text>,
    ],
    startDate: new Date(2022, 3, 20),
    typeOfEmployment: 'Омск',
    vacancy: 'Веб-разработчик'
  },
  {
    employer: { name: 'Фриланс', },
    endDate: new Date(2023, 1, 31),
    responsibilities: [
      <Text>Разработка и интеграция модулей на PHP для WordPress, WooCommerce.</Text>,
      <Text>Синхронизация товаров с разных сайтов.</Text>
    ],
    startDate: new Date(2022, 11, 1),
    typeOfEmployment: 'distant',
    vacancy: 'Fullstack-разработчик',
  },
  {
    employer: { name: 'Фриланс', },
    endDate: new Date(2023, 5, 27),
    responsibilities: [<Text>Разработка CRM с использованием NextJS (фронт на React, бэк встроенные инструменты NextJS). Макет можно посмотреть <a href='https://www.figma.com/file/a3IWhsmpU8yww3worXbB21/' target='_blank'>здесь</a>.</Text>],
    startDate: new Date(2023, 5, 6),
    typeOfEmployment: 'distant',
    vacancy: 'Fullstack-разработчик',
  },
  {
    employer: { name: 'Edbee', },
    endDate: 'present',
    responsibilities: [
      <Text>Работа с React и смежными технологиями для добавления новых функциональных возможностей.</Text>,
      <Text>Регулярное исправление ошибок и улучшение производительности.</Text>,
      <Text>Деплой проекта на тестовый и продакш серверы.</Text>
    ],
    startDate: new Date(2023, 3, 21),
    typeOfEmployment: 'distant',
    vacancy: 'Веб-разработчик',
  }
];

export const educationData: Education[] = [
  {
    education: [
      {
        degree: 'Бакалавр',
        endDate: new Date(2021, 7, 1),
        faculty: { name: 'Факультет компьютерных наук' },
        speciality: 'Математика и компьютерные науки',
        startDate: new Date(2017, 8, 1),
      },
      {
        degree: 'Магистратура',
        endDate: new Date(2025, 7, 1),
        faculty: { name: 'Факультет цифровых технологий и кибербезопасности' },
        speciality: 'Прикладная математика и информатика',
        startDate: new Date(2021, 8, 1),
      },
    ],
    institution: { name: 'Омский государственный университет им. Ф.М. Достоевского', },
  },
];

export const additionalData: JSX.Element[] = [
  <Text>Рекомендация от директора ООО "Кронмедиа".</Text>,
  <Text>Главный организатор <a href='https://vk.com/student_it' target='_blank'>Студенческого IT-клуба</a>.</Text>,
  <Text>Product manager команды "робот-уборщик", которая <a href='https://vk.com/studentlabs?w=wall-205076048_227' target='_blank'>выиграла в студенческой IT-лаборатории</a>.</Text>,
  <Text>Хобби: музыка, художественная литература, пет-проекты, математика.</Text>,
];

export const skillData: Skill[] = [
  {
    name: 'Front end',
    skill: [JavaScript, TypeScript, Eslint, React, ReactRouter, NextJS, Redux, Mui, Sass, Css3, Html5, Figma, Storybook, SolidJS, Vite],
  },
  {
    name: 'Другие',
    skill: [Arch, Neovim, Rust, Docker, Git, GitLab, GitHubBadge, Php],
  },
];
