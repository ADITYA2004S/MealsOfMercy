import { v4 as unique } from "uuid";

const getUniqueID = (prefix: string = "", length: number = 10) => {
  return `${prefix}${unique()
    .replaceAll("-", "")
    .substring(0, length)
    .toUpperCase()}`;
};

export default getUniqueID;
