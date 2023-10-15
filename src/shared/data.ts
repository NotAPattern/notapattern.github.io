import Arch from '../assets/arch.svg';
import Css3 from '../assets/css3.svg';
import Docker from '../assets/docker.svg';
import Html5 from '../assets/html5.svg';
import JavaScript from '../assets/javascript.svg';
import { JSX } from 'solid-js/jsx-runtime';
import Mui from '../assets/mui.svg';
import Neovim from '../assets/neovim.svg';
import NextJS from '../assets/next.svg';
import React from '../assets/react.svg';
import Redux from '../assets/redux.svg';
import Rust from '../assets/rust.svg';
import Sass from '../assets/sass.svg';
import TypeScript from '../assets/typescript.svg';

export type WorkExperience = {
  employer: {
    name: string;
    url?: string;
  };
  startDate: Date;
  endDate: Date | 'present';
  vacancy: string;
  projects?: {
    name: string;
    url?: string;
    description?: JSX.Element | string;
  }[];
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

export const workExperienceData: WorkExperience[] = [
  {
    employer: {
      name: 'Cron',
      url: 'https://cron.design',
    },
    endDate: new Date(2022, 10, 25),
    projects: [
      {
        description: 'Приложение для тренеровок в спортзале.',
        name: 'TRNR',
        url: 'https://trnr.ru',
      },
      {
        description: 'Сайт для проверки сотруднков.',
        name: 'Secret',
        // url: "https://staffscan.ru",
      },
    ],
    startDate: new Date(2022, 3, 20),
    vacancy: 'Веб-разработчик',
  },
  {
    employer: { name: 'Фрилансер', },
    endDate: new Date(2023, 1, 31),
    projects: [
      {
        description: 'Программирование на PHP с использованием WordPress.',
        name: 'Мелкие задачи на фрилансе',
      },
    ],
    startDate: new Date(2022, 11, 1),
    vacancy: 'Веб-разработчик',
  },
  {
    employer: { name: 'Фрилансер', },
    endDate: new Date(2023, 5, 27),
    projects: [
      {
        description: 'CRM для учителей. В ссылке только Figma макет. Full stack на NextJS + TS.',
        name: 'InSchoolCrm',
        url: 'https://www.figma.com/file/a3IWhsmpU8yww3worXbB21/',
      },
    ],
    startDate: new Date(2023, 5, 6),
    vacancy: 'Fullstack-разработчик',
  },
  {
    employer: { name: 'Edbee', },
    endDate: 'present',
    projects: [
      {
        description: 'Экосистема цифрового обучения',
        name: 'Edbee',
        url: 'https://edbee.ru/',
      },
    ],
    startDate: new Date(2023, 3, 21),
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

export const skillData: Skill[] = [
  {
    name: 'Front end',
    skill: [JavaScript, TypeScript, React, NextJS, Redux, Mui, Sass, Css3, Html5],
  },
  {
    name: 'OS',
    skill: [Arch],
  },
  {
    name: 'Другие',
    skill: [Neovim, Rust, Docker],
  },
];
