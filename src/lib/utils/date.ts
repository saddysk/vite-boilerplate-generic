import { format } from 'date-fns';

export const formatDateTime = (date: Date) => {
  return format(date, 'MMM dd yyyy, hh:mm aa');
};

export const formatDate = (date: Date) => {
  return format(date, 'MMM dd yyyy');
};
