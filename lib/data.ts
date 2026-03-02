export type PortfolioCategory = "brows" | "lashes" | "sport-makeup"

export interface PortfolioItem {
  id: number
  category: PortfolioCategory
  caption: string
  aspect: "portrait" | "landscape" | "square"
  image: string
}

export const portfolioItems: PortfolioItem[] = [
  // ── Brows ──
  { id: 1,  category: "brows", caption: "Коррекция бровей — до/после",                aspect: "portrait",  image: "/images/portfolio/brow-1.jpg" },
  { id: 2,  category: "brows", caption: "Ламинирование бровей",                       aspect: "square",    image: "/images/portfolio/brow-2.jpg" },
  { id: 3,  category: "brows", caption: "Окрашивание бровей — натуральный результат",  aspect: "landscape", image: "/images/portfolio/brow-3.jpg" },
  { id: 4,  category: "brows", caption: "Густые брови — аккуратная форма",             aspect: "portrait",  image: "/images/portfolio/brow-4.jpg" },
  { id: 5,  category: "brows", caption: "Перекрытие перманента",                       aspect: "square",    image: "/images/portfolio/brow-5.jpg" },
  { id: 6,  category: "brows", caption: "Коррекция + окрашивание",                     aspect: "landscape", image: "/images/portfolio/brow-6.jpg" },
  { id: 7,  category: "brows", caption: "Ламинирование — естественный изгиб",          aspect: "portrait",  image: "/images/portfolio/brow-1.jpg" },
  { id: 8,  category: "brows", caption: "Архитектура бровей",                          aspect: "square",    image: "/images/portfolio/brow-3.jpg" },
  { id: 9,  category: "brows", caption: "Осветление плотного оттенка",                 aspect: "portrait",  image: "/images/portfolio/brow-5.jpg" },
  { id: 10, category: "brows", caption: "Брови — до/после коррекции",                  aspect: "landscape", image: "/images/portfolio/brow-2.jpg" },
  { id: 11, category: "brows", caption: "Окрашивание хной",                            aspect: "square",    image: "/images/portfolio/brow-4.jpg" },
  { id: 12, category: "brows", caption: "Густые брови — до/после",                     aspect: "portrait",  image: "/images/portfolio/brow-6.jpg" },
  // ── Lashes ──
  { id: 13, category: "lashes", caption: "Ламинирование ресниц",                       aspect: "portrait",  image: "/images/portfolio/lash-1.jpg" },
  { id: 14, category: "lashes", caption: "Окрашивание ресниц — до/после",              aspect: "square",    image: "/images/portfolio/lash-2.jpg" },
  { id: 15, category: "lashes", caption: "Ламинирование — натуральный изгиб",          aspect: "landscape", image: "/images/portfolio/lash-3.jpg" },
  { id: 16, category: "lashes", caption: "Ресницы — открытый взгляд",                  aspect: "portrait",  image: "/images/portfolio/lash-4.jpg" },
  { id: 17, category: "lashes", caption: "Ламинирование нижних ресниц",                aspect: "square",    image: "/images/portfolio/lash-5.jpg" },
  { id: 18, category: "lashes", caption: "Окрашивание + ламинирование",                aspect: "portrait",  image: "/images/portfolio/lash-6.jpg" },
  { id: 19, category: "lashes", caption: "Ресницы — до/после",                         aspect: "landscape", image: "/images/portfolio/lash-1.jpg" },
  { id: 20, category: "lashes", caption: "Ламинирование — эффект «распахнутого взгляда»", aspect: "square", image: "/images/portfolio/lash-3.jpg" },
  { id: 21, category: "lashes", caption: "Натуральное окрашивание",                    aspect: "portrait",  image: "/images/portfolio/lash-5.jpg" },
  { id: 22, category: "lashes", caption: "Ламинирование — 6 недель спустя",            aspect: "landscape", image: "/images/portfolio/lash-2.jpg" },
  { id: 23, category: "lashes", caption: "Окрашивание — чёрный тон",                   aspect: "square",    image: "/images/portfolio/lash-4.jpg" },
  { id: 24, category: "lashes", caption: "Ресницы — максимальный объём",               aspect: "portrait",  image: "/images/portfolio/lash-6.jpg" },
  // ── Sport Makeup ──
  { id: 25, category: "sport-makeup", caption: "Спортивный макияж — старт",             aspect: "portrait",  image: "/images/portfolio/sport-1.jpg" },
  { id: 26, category: "sport-makeup", caption: "Макияж для соревнований",               aspect: "landscape", image: "/images/portfolio/sport-2.jpg" },
  { id: 27, category: "sport-makeup", caption: "Сценический макияж",                    aspect: "square",    image: "/images/portfolio/sport-3.jpg" },
  { id: 28, category: "sport-makeup", caption: "Макияж + укладка пучка",                aspect: "portrait",  image: "/images/portfolio/sport-4.jpg" },
  { id: 29, category: "sport-makeup", caption: "Спортивный макияж — до/после",          aspect: "landscape", image: "/images/portfolio/sport-5.jpg" },
  { id: 30, category: "sport-makeup", caption: "Макияж для съёмок",                     aspect: "square",    image: "/images/portfolio/sport-6.jpg" },
  { id: 31, category: "sport-makeup", caption: "Яркий сценический образ",               aspect: "portrait",  image: "/images/portfolio/sport-1.jpg" },
  { id: 32, category: "sport-makeup", caption: "Макияж для художественной гимнастики",  aspect: "landscape", image: "/images/portfolio/sport-3.jpg" },
  { id: 33, category: "sport-makeup", caption: "Макияж для фигурного катания",          aspect: "square",    image: "/images/portfolio/sport-5.jpg" },
  { id: 34, category: "sport-makeup", caption: "Спортивный макияж — финальный результат", aspect: "portrait", image: "/images/portfolio/sport-2.jpg" },
  { id: 35, category: "sport-makeup", caption: "Образ для выступления",                 aspect: "square",    image: "/images/portfolio/sport-4.jpg" },
  { id: 36, category: "sport-makeup", caption: "Конкурсный макияж — крупный план",      aspect: "portrait",  image: "/images/portfolio/sport-6.jpg" },
]

export const reviews = [
  {
    id: 1,
    name: "Анастасия К.",
    text: "Наконец-то нашла мастера, который понимает, что нужно спортсменке. Макияж держался всё выступление, и я чувствовала себя уверенно.",
    service: "Спортивный макияж",
  },
  {
    id: 2,
    name: "Мария Д.",
    text: "Ламинирование бровей — это лучшее, что я сделала за последний год. Естественно, аккур��тно, и держится долго.",
    service: "Брови",
  },
  {
    id: 3,
    name: "Екатерина В.",
    text: "Пришла с «убитыми» ресницами после наращивания. Через два ламинирования — ресницы как новые. Спасибо за индивидуальный подход!",
    service: "Ресницы",
  },
  {
    id: 4,
    name: "Ольга М.",
    text: "Записалась на консультацию и сразу поняла — это мой мастер. Внимательность к деталям и профессионализм на высшем уровне.",
    service: "Брови",
  },
  {
    id: 5,
    name: "Дарья С.",
    text: "Макияж для соревнований по художественной гимнастике. Дочь была в восторге, судьи отметили образ. Обязательно вернёмся!",
    service: "Спортивный макияж",
  },
]

export const brands = [
  "THUYA",
  "BRONSUN",
  "BEAUTIFUL BROWS",
  "LASH BOTOX",
  "SEXY BROW HENNA",
  "INNOVATOR COSMETICS",
  "KRYGINA",
  "MAC",
]

export interface SubService {
  title: string
  description: string
  duration: string
  price: string
  includes: string[]
}

export const browsServices: SubService[] = [
  {
    title: "Коррекция бровей",
    description: "Архитектура формы с учётом анатомии лица, типа роста и ваших пожеланий.",
    duration: "20-60 мин",
    price: "от 800 ₽",
    includes: ["Подбор формы", "Коррекция пинцетом/воском", "Финальная укладка"],
  },
  {
    title: "Окрашивание бровей",
    description: "Натуральный или насыщенный оттенок — подбираю под цветотип и стиль.",
    duration: "20-60 мин",
    price: "от 1 000 ₽",
    includes: ["Подбор оттенка", "Окрашивание краской или хной", "Уход после процедуры"],
  },
  {
    title: "Ламинирование бровей",
    description: "Долговременная укладка с эффектом «расчёсанных» бровей. Идеально для густых и непослушных бровей.",
    duration: "~1.5 часа",
    price: "от 2 500 ₽",
    includes: ["Ламинирование", "Окрашивание (при необходимости)", "Коррекция формы", "Уходовый состав"],
  },
  {
    title: "Перекрытие перманентного макияжа",
    description: "Камуфляж старого перманента с помощью окрашивания и коррекции формы.",
    duration: "по консультации",
    price: "по консультации",
    includes: ["Оценка состояния", "Подбор техники", "Поэтапное перекрытие"],
  },
  {
    title: "Осветление / снятие плотного оттенка",
    description: "Безопасное осветление перекрашенных или слишком тёмных бровей.",
    duration: "по консультации",
    price: "по консультации",
    includes: ["Диагностика", "Осветление состава", "Восстанавливающий уход"],
  },
]

export const lashesServices: SubService[] = [
  {
    title: "Окрашивание ресниц",
    description: "Глубокий насыщенный цвет без наращивания. Естественный, но заметный результат.",
    duration: "30-60 мин",
    price: "от 800 ₽",
    includes: ["Подбор оттенка", "Окрашивание", "Уходовое масло"],
  },
  {
    title: "Ламинирование ресниц",
    description: "Красивый изгиб, объём и ухоженный вид на 6-8 недель. Состав подбираю индивидуально.",
    duration: "60-90 мин",
    price: "от 2 500 ₽",
    includes: ["Ламинирование", "Окрашивание", "Ботокс для ресниц", "Уходовый состав"],
  },
  {
    title: "Ламинирование нижних ресниц",
    description: "Дополнительная опция для полного преображения взгляда.",
    duration: "+15-20 мин",
    price: "от 500 ₽",
    includes: ["Ламинирование нижнего ряда", "Окрашивание при необходимости"],
  },
]

export const sportMakeupServices: SubService[] = [
  {
    title: "Спортивный макияж для соревнований",
    description: "Яркий, стойкий макияж, который держится всё выступление. Подчёркивает образ и передаёт эмоции на расстоянии.",
    duration: "60-90 мин",
    price: "от 3 000 ₽",
    includes: ["Подбор образа", "Профессиональная косметика", "Стойкая фиксация", "Рекомендации по снятию"],
  },
  {
    title: "Макияж для съёмок / сцены",
    description: "Макияж, который идеально смотрится в кадре и при софитах.",
    duration: "60-90 мин",
    price: "от 3 500 ₽",
    includes: ["Консультация по образу", "Макияж под освещение", "Коррекция в процессе"],
  },
  {
    title: "Укладка пучка",
    description: "Классический пучок или конкурсный вариант — аккуратно, надёжно, красиво.",
    duration: "30-60 мин",
    price: "от 1 500 ₽",
    includes: ["Укладка", "Фиксация", "Декор (при необходимости)"],
  },
]

export interface FAQItem {
  question: string
  answer: string
}

export const browsFAQ: FAQItem[] = [
  { question: "Больно ли делать коррекцию бровей?", answer: "Ощущения зависят от индивидуальной чувствительности, но я работаю максимально аккуратно и использую технику, которая минимизирует дискомфорт." },
  { question: "Как часто нужно делать коррекцию?", answer: "В среднем раз в 3-4 недели, но это зависит от скорости роста волосков и желаемой формы." },
  { question: "Сколько держится ламинирование бровей?", answer: "Эффект сохраняется 4-8 недель в зависимости от структуры волосков и ухода." },
  { question: "Можно ли перекрыть старый перманент?", answer: "Да, но сначала нужна консультация — я оценю состояние и подберу оптимальную стратегию." },
  { question: "Подойдёт ли ламинирование для тонких бровей?", answer: "Да! Ламинирование визуально добавляет объём и делает даже тонкие брови более выразительными." },
  { question: "Какие материалы вы используете?", answer: "Работаю только с проверенными профессиональными брендами — THUYA, Bronsun, Beautiful Brows и другими." },
]

export const lashesFAQ: FAQItem[] = [
  { question: "Не испортит ли ламинирование ресницы?", answer: "Нет, если процедура выполнена правильно. Я подбираю состав индивидуально, ч��обы не пересушить и не повредить ресницы." },
  { question: "Сколько держится эффект ламинирования?", answer: "6-8 недель — зависит от цикла роста ваших ресниц и ухода после процедуры." },
  { question: "Можно ли красить ресницы тушью после ламинирования?", answer: "Да, через 24 часа после процедуры. Но многие клиентки обходятся без туши — результат и так впечатляет." },
  { question: "Есть ли противопоказания?", answer: "Основные: аллергия на компоненты, воспаления глаз, недавние операции на глазах. Всё обсуждаем на консультации." },
  { question: "Можно ли делать ламинирование на короткие ресницы?", answer: "Да! Эффект будет мягче, но взгляд станет заметно более открытым и выразительным." },
  { question: "Чем отличается окрашивание от ламинирования?", answer: "Окрашивание меняет цвет, ламинирование — форму, изгиб и объём. Лучший результат — комбинация обеих процедур." },
]

export const sportMakeupFAQ: FAQItem[] = [
  { question: "За сколько до выступления нужно записаться?", answer: "Рекомендую записываться за 1-2 недели. В день выступления — за 1.5-2 часа до выхода." },
  { question: "Макияж не потечёт во время выступления?", answer: "Нет. Использую профессиональную стойкую косметику и технику фиксации, рассчитанную на физические нагрузки." },
  { question: "Работаете ли вы с детьми?", answer: "Да, работаю с юными спортсменками. Использую гипоаллергенную косметику и учитываю возрастные особенности." },
  { question: "Можно ли сделать пробный макияж?", answer: "Конечно! Пробный макияж рекомендую делать за 1-2 недели до соревнований, чтобы утвердить образ." },
  { question: "Выезжаете ли вы на соревнования?", answer: "Да, выезжаю на соревнования и мероприятия. Условия обсуждаем индивидуально." },
  { question: "Что входит в укладку пучка?", answer: "Укладка, фиксация лаком и гелем, при необходимости — декор (сеточка, стразы, шпильки)." },
  { question: "Какую косметику вы используете?", answer: "Профессиональную стойкую косметику: MAC, Krygina и другие бренды, проверенные на соревнованиях." },
]
