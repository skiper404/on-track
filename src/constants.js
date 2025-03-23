import { ListBulletIcon } from '@heroicons/vue/24/solid';
import { ChartBarIcon, ClockIcon } from '@heroicons/vue/24/outline';
import { generatePeriodSelectOptions } from '@/functions';

const PAGE_TIMELINE = 'timeline';
const PAGE_ACTIVITIES = 'activities';
const PAGE_PROGRESS = 'progress';

const NAV_ITEMS = {
  [PAGE_TIMELINE]: ClockIcon,
  [PAGE_ACTIVITIES]: ListBulletIcon,
  [PAGE_PROGRESS]: ChartBarIcon,
};
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_HOUR = SECONDS_IN_MINUTE * MINUTES_IN_HOUR;
const MIDNIGHT_HOUR = 0;
const HOURS_IN_DAY = 24;

const PERIODS_IN_MINUTES = [15, 30, 45, 60, 90, 120, 150, 180];
const PERIOD_SELECT_OPTIONS = generatePeriodSelectOptions(PERIODS_IN_MINUTES);

const BUTTON_TYPE_DANGER = 'danger';
const BUTTON_TYPE_NEUTRAL = 'neutral';
const BUTTON_TYPE_ACCEPT = 'accept';

const BUTTONS_TYPES = [
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
];

const NULLABLE_ACTIVITY = { id: null };

export {
  PAGE_TIMELINE,
  PAGE_ACTIVITIES,
  PAGE_PROGRESS,
  NAV_ITEMS,
  MIDNIGHT_HOUR,
  HOURS_IN_DAY,
  PERIOD_SELECT_OPTIONS,
  BUTTONS_TYPES,
  BUTTON_TYPE_DANGER,
  BUTTON_TYPE_NEUTRAL,
  BUTTON_TYPE_ACCEPT,
  SECONDS_IN_HOUR,
  SECONDS_IN_MINUTE,
  MINUTES_IN_HOUR,
  NULLABLE_ACTIVITY,
  PERIODS_IN_MINUTES,
};
