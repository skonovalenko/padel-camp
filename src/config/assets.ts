import hero       from '../assets/hero.png';
import training   from '../assets/training.png';
import tournament from '../assets/tournament.png';
import mallorca   from '../assets/mallorca.png';

export const assets = {
  hero,
  heroMobile: hero,
  training,
  tournament,
  mallorca,
  community: '/assets/community.jpg',

  checkmark:         '/assets/checkmark.png',
  checkmarkNegative: '/assets/checkmark-negative.png',
  coachIcon:         '/assets/coach-icon.svg',
  pinIcon:           '/assets/pin-icon.svg',
  underlineSchedule: '/assets/underline-schedule.svg',
  underlineFaq:      '/assets/underline-faq.svg',
} as const;
