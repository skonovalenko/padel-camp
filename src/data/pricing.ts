export interface PriceItem {
  text: string;
  included: boolean;
}

export const priceWithout: PriceItem[] = [
  { text: 'Оренда кортів',                      included: true  },
  { text: 'Сертифікований тренер',               included: true  },
  { text: 'Щоденні активності',                  included: true  },
  { text: 'Розміщення в двокімнатному номері',   included: false },
  { text: 'Похід в спа при готелі',              included: false },
  { text: 'Трансфер до кортів',                  included: false },
  { text: 'Сніданки та вечері',                  included: false },
];

export const priceWith: PriceItem[] = [
  { text: 'Оренда кортів',                      included: true },
  { text: 'Сертифікований тренер',               included: true },
  { text: 'Щоденні активності',                  included: true },
  { text: 'Розміщення в двокімнатному номері',   included: true },
  { text: 'Похід в спа при готелі',              included: true },
  { text: 'Швидкий доступ до кортів',            included: true },
  { text: 'Сніданки та вечері',                  included: true },
];
