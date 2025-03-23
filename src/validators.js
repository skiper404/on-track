import {
  HOURS_IN_DAY,
  MIDNIGHT_HOUR,
  NAV_ITEMS,
  BUTTONS_TYPES,
} from '@/constants';

const isPageValid = (page) => Object.keys(NAV_ITEMS).includes(page);

const isTimelineItemValid = ({ hour }) => isHourValid(hour);

const validateSelectOptions = (options) => {
  return options.every(isSelectOptionValid);
};

const isSelectOptionValid = ({ value, label }) =>
  isNumber(value) || (isNotEmptyString(value) && isNotEmptyString(label));

const validateTimelineItems = (timelineItems) => {
  return timelineItems.every(isTimelineItemValid);
};

const isBetween = (hour, start, end) => hour >= start && hour <= end;

const isHourValid = (hour) =>
  isNumber(hour) && isBetween(hour, MIDNIGHT_HOUR, HOURS_IN_DAY - 1);

const isUndefined = (value) => value === undefined;

const isNull = (value) => value === null;

const isNumber = (value) => typeof value === 'number';

const isString = (value) => typeof value === 'string';

const isNumberOrNull = (value) => isNumber(value) || isNull(value);

const isUndefinedOrNull = (value) => isUndefined(value) || isNull(value);

const isNotEmptyString = (value) => isString(value) && value.length !== 0;

const isValidActivity = ({ id, name, secondsToComplete }) => {
  return [
    isNotEmptyString(id),
    isNotEmptyString(name),
    isNumber(secondsToComplete),
  ].every(Boolean);
};

const validActivities = (activities) => activities.every(isValidActivity);

const isButtonValid = (button) => BUTTONS_TYPES.includes(button);

export {
  isNull,
  isUndefined,
  isNumber,
  isNumberOrNull,
  isUndefinedOrNull,
  isPageValid,
  isHourValid,
  isTimelineItemValid,
  validateSelectOptions,
  validateTimelineItems,
  validActivities,
  isValidActivity,
  isButtonValid,
};
