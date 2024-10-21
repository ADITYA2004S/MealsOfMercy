import { DateTime } from "luxon";

export const getCurrentDateAndTime = () => {
  return DateTime.now().set({ millisecond: 0 }).toJSDate();
};

export const getFormattedDate = (date: Date, format: string = "yyyy-MM-dd") => {
  return DateTime.fromJSDate(date).toFormat(format);
};

export const getCurrentDate = () => {
  return DateTime.now()
    .set({ hour: 0, minute: 0, second: 0, millisecond: 0 })
    .toJSDate();
};

export const getCurrentTime = () => {
  return DateTime.now().set({ millisecond: 0 }).toJSDate();
};
