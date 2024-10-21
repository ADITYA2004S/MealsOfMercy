import { DateTime, Interval } from "luxon";

const toFormat = (date: Date) => {
  return DateTime.fromJSDate(date).toFormat("dd-MM-yyyy");
};

export const validateDateInterval = (
  start: Date | string,
  end: Date | string,
  message: string
) => {
  let _start: Date = start as Date;
  let _end: Date = end as Date;

  if (!start.toString().includes("T")) {
    _start = DateTime.fromFormat(start.toString(), "yyyy-MM-dd").toJSDate();
  }

  if (!end.toString().includes("T")) {
    _end = DateTime.fromFormat(end.toString(), "yyyy-MM-dd").toJSDate();
  }

  if (_start.toString() === "Invalid Date") {
    throw new Error("Start Date Is Invalid");
  }

  if (_end.toString() === "Invalid Date") {
    throw new Error("End Date Is Invalid");
  }

  const days = Interval.fromDateTimes(_start, _end).length("day");
  const months = Interval.fromDateTimes(_start, _end).length("months");
  const years = Interval.fromDateTimes(_start, _end).length("years");

  if (isNaN(days) || isNaN(months) || isNaN(years)) {
    throw new Error(message);
  }
};

export const validatePastDate = (date: Date | string, message: string) => {
  let _: Date = date as Date;

  if (!date.toString().includes("T")) {
    _ = DateTime.fromFormat(date.toString(), "yyyy-MM-dd").toJSDate();
  }

  if (_.toString() === "Invalid Date") {
    throw new Error("Invalid Past Date");
  }

  const years = Interval.fromDateTimes(_ as Date, DateTime.now()).length(
    "years"
  );

  if (isNaN(years)) {
    throw new Error(message);
  }
};

export const validateFutureDate = (date: Date | string, message: string) => {
  let _: Date = date as Date;

  if (!date.toString().includes("T")) {
    _ = DateTime.fromFormat(date.toString(), "yyyy-MM-dd").toJSDate();
  }

  if (_.toString() === "Invalid Date") {
    throw new Error("Invalid Future Date");
  }

  const years = Interval.fromDateTimes(DateTime.now(), _).length("years");

  if (isNaN(years)) {
    throw new Error(message);
  }
};

export const validateBirthday = (date: Date, age: number = 13) => {
  let _: Date = date as Date;

  if (!date.toString().includes("T")) {
    _ = DateTime.fromFormat(date.toString(), "yyyy-MM-dd").toJSDate();
  }

  if (_.toString() === "Invalid Date") {
    throw new Error("Invalid Birthday");
  }

  const years = Interval.fromDateTimes(_, DateTime.now()).length("years");

  if (isNaN(years)) {
    throw new Error("Invalid Birthday");
  }

  if (years < age) {
    throw new Error(`User Must Be At Least ${age} Years Of Age`);
  }
};
