import type { ImageMetadata } from 'astro';
import { assets } from '../config/assets';

export interface ProgramTag { icon?: string; text: string; }
export interface Program { title: string; img: ImageMetadata | string; desc: string; tags: ProgramTag[]; }

export const programs: Program[] = [
  {
    title: 'Тренування',
    img: assets.training,
    desc: 'Щоденні тренування з сертифікованим тренером допоможуть покращити техніку ударів і тактику гри. Групи формуються за рівнем, а тренер дає індивідуальні поради для ефективного розвитку вашої гри.',
    tags: [
      { icon: assets.coachIcon, text: 'Andrea González Pérez' },
      { text: '12 гравців' },
    ],
  },
  {
    title: 'Турнір',
    img: assets.tournament,
    desc: 'У фінальний день відбудеться дружній турнір у змішаних парах, де учасники зможуть застосувати все, чого навчилися на кемпі. Пройдуть півфінали та фінал, а день завершиться нагородженням і приємними спогадами від гри.',
    tags: [
      { text: 'Змішані пари' },
      { text: 'Racket ID' },
    ],
  },
  {
    title: 'Mallorca',
    img: assets.mallorca,
    desc: 'Mallorca — це сонце, море та відчуття легкості з перших хвилин. Між тренуваннями можна насолоджуватися прогулянками узбережжям, теплими вечорами в компанії інших учасників і завершальною вечерею, яка підсумовує спільний досвід кемпу.',
    tags: [
      { icon: assets.pinIcon, text: 'Palma de Mallorca' },
    ],
  },
  {
    title: 'Community',
    img: assets.community,
    desc: 'Наша падел-спільнота з Valencia регулярно грає матчі та тренується разом. Ми добре знаємо одне одного по корту й підтримуємо командний дух. Кемп дає можливість разом отримати новий досвід, зберігаючи дружню атмосферу і азарт гри.',
    tags: [
      { text: 'PlayPadel' },
      { text: 'Padel Valencia' },
    ],
  },
];
