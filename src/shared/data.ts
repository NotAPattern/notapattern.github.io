import Arch from '../assets/arch.svg';
import Css3 from '../assets/css3.svg';
import Docker from '../assets/docker.svg';
import Html5 from '../assets/html5.svg';
import JavaScript from '../assets/javascript.svg';
import { JSX } from 'solid-js/jsx-runtime';
import Mui from '../assets/mui.svg';
import Neovim from '../assets/neovim.svg';
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
  projects?: Array<{
    name: string;
    url?: string;
    description?: JSX.Element | string;
  }>;
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
    startDate: new Date(2022, 3, 20),
    endDate: new Date(2022, 10, 25),
    vacancy: 'Веб-разработчик',
    projects: [
      {
        name: 'TRNR',
        url: 'https://trnr.ru',
        description: 'Приложение для тренеровок в спортзале.',
      },
      {
        name: 'Secret',
        // url: "https://staffscan.ru",
        description: 'Сайт для проверки сотруднков.',
      },
    ],
  },
  {
    employer: {
      name: 'Фрилансер',
    },
    startDate: new Date(2022, 11, 1),
    endDate: new Date(2023, 1, 31),
    vacancy: 'Веб-разработчик',
  },
];

export const educationData: Education[] = [
  {
    institution: {
      name: 'Омский государственный университет им. Ф.М. Достоевского',
    },
    education: [
      {
        startDate: new Date(2017, 8, 1),
        endDate: new Date(2021, 7, 1),
        degree: 'Бакалавр',
        faculty: { name: 'Факультет компьютерных наук' },
        speciality: 'Математика и компьютерные науки',
      },
      {
        startDate: new Date(2021, 8, 1),
        endDate: new Date(2025, 7, 1),
        degree: 'Магистратура',
        faculty: { name: 'Факультет цифровых технологий и кибербезопасности' },
        speciality: 'Прикладная математика и информатика',
      },
    ],
  },
];

export const skillData: Skill[] = [
  {
    name: 'Front end',
    skill: [JavaScript, TypeScript, React, Redux, Mui, Sass, Css3, Html5],
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
