export interface ScheduleDay { day: string; month: string; title: string; desc: string; }

export const schedule: ScheduleDay[] = [
  { day: '8',  month: 'mayo', title: 'Початок',           desc: 'Прибуття учасників, знайомство та перше тренування. Welcome вечеря.' },
  { day: '9',  month: 'mayo', title: 'Техніка і практика', desc: 'Повноцінні тренування з фокусом на техніці та ігрових ситуаціях.' },
  { day: '10', month: 'mayo', title: 'Екскурсія островом', desc: 'Підготовка до матчів, екскурсія Майоркою.' },
  { day: '11', month: 'mayo', title: 'Завершення',         desc: 'Фінальні матчі, нагородження, відпочинок в спа та спільна вечеря' },
];
