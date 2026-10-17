import type { Category, L10n, SpecValue } from '../../src/shared/specs.ts';
import type { Badge } from '../../src/shared/types.ts';
import type { AnswerRow, ProductRow, QuestionRow, ReviewRow } from './types.ts';

/**
 * Демо-каталог. Бренды и модели вымышленные, характеристики выдуманы для демонстрации.
 * Загружается в БД один раз, когда таблица товаров пуста.
 */
const t = (ru: string, en: string = ru): L10n => ({ ru, en });
const DATE = '2026-09-20T10:00:00.000Z';

interface Draft {
  id: string;
  category: Category;
  brand: string;
  name: string;
  price: number;
  oldPrice?: number;
  badge?: Badge;
  colors: [string, string];
  ru: string;
  en: string;
  specs: Record<string, SpecValue>;
}

const DRAFTS: Draft[] = [
  // ---------- смартфоны ----------
  {
    id: 'arc-phone-x', category: 'smartphones', brand: 'Arc', name: 'Arc Phone X', price: 59990, oldPrice: 69990, badge: 'hit',
    colors: ['#6c63ff', '#2ec4ff'],
    ru: 'Флагман с ярким 120 Гц экраном, мощной камерой и быстрой зарядкой на весь день.',
    en: 'A flagship with a bright 120 Hz display, a powerful camera and all-day fast charging.',
    specs: { chip: t('Arc A17'), screen: 6.7, refresh: 120, ram: 12, storage: 256, camera: 50, battery: 5000, charging: 67, weight: 192, nfc: true, warranty: 12 },
  },
  {
    id: 'nova-s5', category: 'smartphones', brand: 'Nova', name: 'Nova S5', price: 44990, badge: 'new',
    colors: ['#ff6b9a', '#ffb86b'],
    ru: 'Тонкий смартфон с рекордно быстрой зарядкой 80 Вт и ёмким аккумулятором.',
    en: 'A slim phone with record-breaking 80 W charging and a large battery.',
    specs: { chip: t('Nova N8'), screen: 6.5, refresh: 120, ram: 8, storage: 128, camera: 64, battery: 5200, charging: 80, weight: 201, nfc: true, warranty: 12 },
  },
  {
    id: 'zenith-lite', category: 'smartphones', brand: 'Zenith', name: 'Zenith Lite', price: 24990,
    colors: ['#34d399', '#3b82f6'],
    ru: 'Доступный смартфон на каждый день: всё необходимое без переплат.',
    en: 'An affordable everyday phone: everything you need without overpaying.',
    specs: { chip: t('Zen 6'), screen: 6.4, refresh: 90, ram: 6, storage: 128, camera: 48, battery: 5000, charging: 33, weight: 189, nfc: true, warranty: 12 },
  },
  {
    id: 'pixelon-9-pro', category: 'smartphones', brand: 'Pixelon', name: 'Pixelon 9 Pro', price: 79990, oldPrice: 89990, badge: 'sale',
    colors: ['#f59e0b', '#ef4444'],
    ru: 'Камерофон с 512 ГБ памяти и увеличенной гарантией 24 месяца.',
    en: 'A camera-first phone with 512 GB of storage and an extended 24-month warranty.',
    specs: { chip: t('Pix G4'), screen: 6.3, refresh: 120, ram: 12, storage: 512, camera: 50, battery: 4700, charging: 45, weight: 187, nfc: true, warranty: 24 },
  },
  {
    id: 'volt-mini', category: 'smartphones', brand: 'Volt', name: 'Volt Mini', price: 32990,
    colors: ['#a78bfa', '#22d3ee'],
    ru: 'Компактный смартфон, который удобно держать одной рукой.',
    en: 'A compact phone that is comfortable to hold with one hand.',
    specs: { chip: t('Volt V3'), screen: 6.1, refresh: 90, ram: 8, storage: 256, camera: 48, battery: 4300, charging: 30, weight: 168, nfc: true, warranty: 12 },
  },
  // ---------- ноутбуки ----------
  {
    id: 'arc-book-15-pro', category: 'laptops', brand: 'Arc', name: 'Arc Book 15 Pro', price: 89990, badge: 'hit',
    colors: ['#6c63ff', '#a78bfa'],
    ru: 'Мощный и тихий ноутбук для работы и творчества с экраном 120 Гц.',
    en: 'A powerful, quiet laptop for work and creativity with a 120 Hz display.',
    specs: { cpu: t('Arc M2 Pro'), cores: 10, gpu: t('Встроенная 16 ядер', 'Integrated 16-core'), ram: 16, storage: 512, screen: 15.6, refresh: 120, battery: 16, weight: 1.7, warranty: 12 },
  },
  {
    id: 'nova-air-14', category: 'laptops', brand: 'Nova', name: 'Nova Air 14', price: 64990, badge: 'new',
    colors: ['#38bdf8', '#818cf8'],
    ru: 'Лёгкий ультрабук на 1,25 кг, который не заметно в рюкзаке.',
    en: 'A light 1.25 kg ultrabook you will barely notice in your backpack.',
    specs: { cpu: t('Nova Core 7'), cores: 8, gpu: t('Встроенная', 'Integrated'), ram: 16, storage: 512, screen: 14, refresh: 90, battery: 13, weight: 1.25, warranty: 12 },
  },
  {
    id: 'zenith-gamer-17', category: 'laptops', brand: 'Zenith', name: 'Zenith Gamer 17', price: 129990, oldPrice: 149990, badge: 'sale',
    colors: ['#ef4444', '#f97316'],
    ru: 'Игровой ноутбук с дискретной графикой, 32 ГБ памяти и экраном 165 Гц.',
    en: 'A gaming laptop with discrete graphics, 32 GB of RAM and a 165 Hz display.',
    specs: { cpu: t('Zenith X9'), cores: 12, gpu: t('Zenith G80 8 ГБ', 'Zenith G80 8 GB'), ram: 32, storage: 1024, screen: 17.3, refresh: 165, battery: 6, weight: 2.6, warranty: 24 },
  },
  {
    id: 'pixelon-book-13', category: 'laptops', brand: 'Pixelon', name: 'Pixelon Book 13', price: 74990,
    colors: ['#f472b6', '#c084fc'],
    ru: 'Компактный ноутбук с рекордной автономностью до 18 часов.',
    en: 'A compact laptop with record battery life of up to 18 hours.',
    specs: { cpu: t('Pix Silicon 3'), cores: 8, gpu: t('Встроенная', 'Integrated'), ram: 8, storage: 256, screen: 13.3, refresh: 60, battery: 18, weight: 1.1, warranty: 12 },
  },
  {
    id: 'volt-work-15', category: 'laptops', brand: 'Volt', name: 'Volt Work 15', price: 52990,
    colors: ['#14b8a6', '#6366f1'],
    ru: 'Рабочая лошадка для офиса и учёбы по честной цене.',
    en: 'A reliable workhorse for the office and studies at a fair price.',
    specs: { cpu: t('Volt i5'), cores: 6, gpu: t('Встроенная', 'Integrated'), ram: 8, storage: 256, screen: 15.6, refresh: 60, battery: 10, weight: 1.8, warranty: 12 },
  },
  // ---------- периферия ----------
  {
    id: 'arc-pulse-headset', category: 'peripherals', brand: 'Arc', name: 'Arc Pulse Headset', price: 7990, badge: 'hit',
    colors: ['#6c63ff', '#22d3ee'],
    ru: 'Беспроводная игровая гарнитура: 40 часов звука и почти нулевая задержка.',
    en: 'A wireless gaming headset: 40 hours of sound and almost zero latency.',
    specs: { type: t('Игровая гарнитура', 'Gaming headset'), connection: t('2.4 ГГц / Bluetooth', '2.4 GHz / Bluetooth'), latency: 20, battery: 40, weight: 290, rgb: true, warranty: 12 },
  },
  {
    id: 'nova-strike-mouse', category: 'peripherals', brand: 'Nova', name: 'Nova Strike Mouse', price: 5490, badge: 'new',
    colors: ['#ff6b9a', '#8b5cf6'],
    ru: 'Сверхлёгкая беспроводная мышь на 58 граммов для быстрых игр.',
    en: 'An ultralight 58 g wireless mouse built for fast-paced games.',
    specs: { type: t('Мышь', 'Mouse'), connection: t('2.4 ГГц', '2.4 GHz'), latency: 1, battery: 90, weight: 58, rgb: true, warranty: 12 },
  },
  {
    id: 'zenith-wired-headset', category: 'peripherals', brand: 'Zenith', name: 'Zenith Wired Headset', price: 4490,
    colors: ['#34d399', '#0ea5e9'],
    ru: 'Проводная гарнитура с чистым звуком и мягкими амбушюрами.',
    en: 'A wired headset with clear sound and soft ear cushions.',
    specs: { type: t('Игровая гарнитура', 'Gaming headset'), connection: t('USB, провод', 'USB, wired'), latency: 12, weight: 320, rgb: false, warranty: 12 },
  },
  {
    id: 'volt-click-mouse', category: 'peripherals', brand: 'Volt', name: 'Volt Click Mouse', price: 1990,
    colors: ['#a3e635', '#22c55e'],
    ru: 'Недорогая проводная мышь с надёжными переключателями на 24 месяца гарантии.',
    en: 'An inexpensive wired mouse with durable switches and a 24-month warranty.',
    specs: { type: t('Мышь', 'Mouse'), connection: t('USB, провод', 'USB, wired'), latency: 1, weight: 72, rgb: false, warranty: 24 },
  },
  {
    id: 'pixelon-keys-75', category: 'peripherals', brand: 'Pixelon', name: 'Pixelon Keys 75', price: 8990, oldPrice: 10990, badge: 'sale',
    colors: ['#f59e0b', '#ec4899'],
    ru: 'Компактная механическая клавиатура 75% с беспроводным подключением.',
    en: 'A compact 75% mechanical keyboard with wireless connectivity.',
    specs: { type: t('Клавиатура', 'Keyboard'), connection: t('2.4 ГГц / Bluetooth', '2.4 GHz / Bluetooth'), latency: 4, battery: 120, weight: 780, rgb: true, warranty: 12 },
  },
  // ---------- аксессуары ----------
  {
    id: 'arc-charge-65', category: 'accessories', brand: 'Arc', name: 'Arc Charge 65W', price: 2490, badge: 'hit',
    colors: ['#6c63ff', '#facc15'],
    ru: 'Зарядное устройство GaN на 65 Вт заряжает ноутбук, телефон и наушники одновременно.',
    en: 'A 65 W GaN charger that powers a laptop, phone and earbuds at once.',
    specs: { type: t('Зарядное устройство', 'Charger'), power: 65, ports: 3, cable: 1.5, weight: 140, warranty: 12 },
  },
  {
    id: 'nova-power-20k', category: 'accessories', brand: 'Nova', name: 'Nova Power 20K', price: 3490,
    colors: ['#fb7185', '#f97316'],
    ru: 'Павербанк на 20 000 мА·ч с быстрой зарядкой 45 Вт.',
    en: 'A 20,000 mAh power bank with 45 W fast charging.',
    specs: { type: t('Повербанк', 'Power bank'), power: 45, ports: 2, cable: 0.3, weight: 420, warranty: 12 },
  },
  {
    id: 'zenith-hub-8', category: 'accessories', brand: 'Zenith', name: 'Zenith Hub 8', price: 4990, badge: 'new',
    colors: ['#22d3ee', '#6366f1'],
    ru: 'USB-C хаб на 8 портов: HDMI, картридер, Ethernet и сквозная зарядка 100 Вт.',
    en: 'An 8-port USB-C hub: HDMI, card reader, Ethernet and 100 W pass-through charging.',
    specs: { type: t('USB-C хаб', 'USB-C hub'), power: 100, ports: 8, cable: 0.2, weight: 110, warranty: 12 },
  },
  {
    id: 'volt-cable-2m', category: 'accessories', brand: 'Volt', name: 'Volt Cable 2 m', price: 990,
    colors: ['#a78bfa', '#34d399'],
    ru: 'Прочный кабель USB-C 240 Вт в оплётке, длина два метра.',
    en: 'A durable braided USB-C 240 W cable, two metres long.',
    specs: { type: t('Кабель', 'Cable'), power: 240, ports: 1, cable: 2, weight: 40, warranty: 24 },
  },
  // ---------- драйверы и софт ----------
  {
    id: 'arc-driver-suite', category: 'software', brand: 'Arc', name: 'Arc Driver Suite Pro', price: 1290, badge: 'hit',
    colors: ['#6c63ff', '#06b6d4'],
    ru: 'Автоматическое обновление драйверов и откат к стабильной версии в один клик.',
    en: 'Automatic driver updates and one-click rollback to a stable version.',
    specs: { platforms: t('Windows / Linux'), version: t('4.2'), devices: 3, support: 12, size: 180 },
  },
  {
    id: 'nova-optimizer', category: 'software', brand: 'Nova', name: 'Nova Optimizer', price: 1990,
    colors: ['#f472b6', '#fb923c'],
    ru: 'Очистка системы и ускорение загрузки Windows без лишних настроек.',
    en: 'System cleanup and faster Windows startup without extra tweaking.',
    specs: { platforms: t('Windows'), version: t('2.8'), devices: 1, support: 6, size: 95 },
  },
  {
    id: 'zenith-backup', category: 'software', brand: 'Zenith', name: 'Zenith Backup', price: 2490, badge: 'new',
    colors: ['#10b981', '#3b82f6'],
    ru: 'Резервное копирование на пять устройств с шифрованием и восстановлением файлов.',
    en: 'Backups for five devices with encryption and file recovery.',
    specs: { platforms: t('Windows / macOS / Linux'), version: t('5.0'), devices: 5, support: 12, size: 240 },
  },
];

export const SEED_PRODUCTS: ProductRow[] = DRAFTS.map((d) => ({
  id: d.id,
  category: d.category,
  brand: d.brand,
  name: d.name,
  price: d.price,
  oldPrice: d.oldPrice,
  badge: d.badge,
  colors: d.colors,
  description: t(d.ru, d.en),
  specs: d.specs,
  createdAt: DATE,
}));

/** Отзывы демо-покупателей (userId = 'seed') */
const review = (n: number, productId: string, authorName: string, rating: number, text: string): ReviewRow => ({
  id: `seed-review-${n}`, productId, userId: 'seed', authorName, rating, text, createdAt: `2026-09-${10 + n}T12:00:00.000Z`,
});

export const SEED_REVIEWS: ReviewRow[] = [
  review(1, 'arc-phone-x', 'Алексей М.', 5, 'Экран очень плавный, заряда хватает на полтора дня. Камера в темноте приятно удивила.'),
  review(2, 'arc-phone-x', 'Мария К.', 4, 'Отличный телефон, но греется при долгой съёмке видео. В остальном всё супер.'),
  review(3, 'arc-phone-x', 'Игорь Л.', 5, 'Беру второй раз — теперь жене. Зарядка 67 Вт реально быстрая.'),
  review(4, 'arc-book-15-pro', 'Дмитрий С.', 5, 'Работаю в монтаже, ноутбук тянет без шума. Экран 120 Гц — отдельное удовольствие.'),
  review(5, 'arc-book-15-pro', 'Анна В.', 4, 'Хороший баланс цены и мощности. Хотелось бы побольше портов.'),
  review(6, 'arc-pulse-headset', 'Никита Р.', 5, 'Звук чистый, микрофон не шипит, батареи хватает на неделю игр.'),
  review(7, 'arc-pulse-headset', 'Олег П.', 4, 'Удобные, но через пару часов немного давят на уши.'),
  review(8, 'nova-strike-mouse', 'Кирилл Т.', 5, 'Очень лёгкая, рука не устаёт. Задержки не ощущаю вообще.'),
];

const question = (n: number, productId: string, authorName: string, text: string): QuestionRow => ({
  id: `seed-question-${n}`, productId, userId: 'seed', authorName, text, createdAt: `2026-09-${14 + n}T09:00:00.000Z`,
});

export const SEED_QUESTIONS: QuestionRow[] = [
  question(1, 'arc-phone-x', 'Сергей Н.', 'Есть ли в комплекте зарядный блок?'),
  question(2, 'arc-phone-x', 'Елена Ф.', 'Поддерживает ли две SIM-карты?'),
  question(3, 'arc-book-15-pro', 'Артём Б.', 'Можно ли расширить оперативную память самостоятельно?'),
];

export const SEED_ANSWERS: AnswerRow[] = [
  { id: 'seed-answer-1', questionId: 'seed-question-1', userId: 'seed', authorName: 'Магазин ARCSHOP', text: 'Да, в комплекте идёт блок питания на 67 Вт и кабель USB-C.', createdAt: '2026-09-16T10:30:00.000Z' },
  { id: 'seed-answer-2', questionId: 'seed-question-2', userId: 'seed', authorName: 'Мария К.', text: 'Да, две nano-SIM, у меня обе работают без проблем.', createdAt: '2026-09-17T15:10:00.000Z' },
];
