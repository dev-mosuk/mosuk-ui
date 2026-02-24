import { date as dateUtil } from './date/util';
import { full } from './full/util';
import { time } from './time/util';

export const date = {
  time: time,
  date: dateUtil,
  full: full,
};
