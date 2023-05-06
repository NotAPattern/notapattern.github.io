import { differenceInCalendarMonths } from 'date-fns';
import { noun as pluralNoun } from 'plural-ru';
import { WorkExperience } from './data';

export const formatTotalWorkExperience = (data: WorkExperience[]): string => {
  const totalMonths = countTotalWorkExperienceInMonths(data);
  if (totalMonths >= 12) {
    return (
      String(Math.round((totalMonths / 12) * 10) / 10) +
      pluralNoun(totalMonths, '+ год', '+ лет')
    );
  } else {
    return (
      String(totalMonths) + pluralNoun(totalMonths, '+ месяц', '+ месяца', '+ месяцев')
    );
  }
};

const countTotalWorkExperienceInMonths = (data: WorkExperience[]): number => {
  return data.reduce((acc, job) => {
    return (
      acc +
      differenceInCalendarMonths(
        job.endDate === 'present' ? Date.now() : job.endDate,
        job.startDate
      )
    );
  }, 0);
};
