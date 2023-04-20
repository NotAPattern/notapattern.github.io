import { JSX } from "solid-js/jsx-runtime";

export type WorkExperience = {
  employer: {
    name: string;
    url?: string;
  };
  startDate: Date;
  endDate: Date | "present";
  vacancy: string;
  projects?: Array<{
    name: string;
    url?: string;
    description?: string | JSX.Element;
  }>;
};

export const workExperience: WorkExperience[] = [
  {
    employer: {
      name: "Cron",
      url: "https://cron.design",
    },
    startDate: new Date(2022, 3, 20),
    endDate: new Date(2023, 10, 25),
    vacancy: "Веб-разработчик",
    projects: [
      {
        name: "TRNR",
        url: "https://trnr.ru",
        description: "Приложение для тренеровок в спортзале.",
      },
      {
        name: "Staffscan",
        url: "https://staffscan.ru",
        description: "Проверка сотруднков.",
      },
    ],
  },
  {
    employer: {
      name: "Фрилансер",
    },
    startDate: new Date(2022, 11, 1),
    endDate: new Date(2023, 1, 31),
    vacancy: "Веб-разработчик",
  },
];
