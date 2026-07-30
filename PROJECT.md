# Harvestam

Nuxt 4 сайт на базе Webflow-шаблона **Harvestam** — лендинг/мультистраничник для агро- и фермерской тематики (organic farming, soil management, crop services).

Разметка и стили перенесены из Webflow HTML; интерактив (IX2, слайдеры, dropdown) поднимается через клиентские Webflow-скрипты.

## Стек

| | |
|---|---|
| Framework | Nuxt `^4.4.8` (SSR включён по умолчанию) |
| UI | Vue `^3.5.39` |
| Стили | Webflow CSS (`public/assets/css/harvestam.webflow.shared.*.css`) |
| Шрифты | локальные OTF + Inter Tight (woff2) |
| Скрипты | jQuery 3.5.1 + Webflow bundles |
| Язык | TypeScript |

## Структура

```
app/
  pages/           # маршруты (home, services, blog, contact, posts…)
  components/      # AppNavbar, AppFooter
  layouts/         # default, blank
  composables/     # useWebflow — загрузка и re-init Webflow IX
  plugins/         # privacy, links, reveal
public/assets/     # CSS, JS, шрифты, изображения из Webflow
nuxt.config.ts
```

## Запуск

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run preview
```

Если после копирования проекта (например из Telegram) появляется `bad interpreter: Operation not permitted`:

```bash
xattr -cr node_modules
```

---

## Бренд / палитра

CSS-переменные в `:root` / `body` (источник правды — stylesheet).

| Имя | CSS variable | Hex | Роль |
|---|---|---|---|
| Light Lime Green | `--light-lime-green` | `#d0f24c` | акцент, CTA, highlight |
| Black | `--black` | `#000000` | тёмный текст / фон |
| Deep Forest Green | `--deep-forest-green` | `#17271a` | заголовки (h1–h6) |
| Deep Evergreen | `--deep-evergreen` | `#0a2710` | тёмный зелёный (h2/h3 styles) |
| Charcoal Gray | `--charcoal-gray` | `#4d4d4d` | основной текст body |
| Charcoal | `--charcoal` | `#3d3d3d` | вторичный тёмно-серый |
| Silver Gray | `--silver-gray` | `#bec2bf` | бордеры, muted UI |
| White | `--white` | `#ffffff` | фон, светлый текст |

> На странице `/style-guide` у «Charcoal» в разметке указан `#33d3d3` — это ошибка в HTML style guide; в CSS используется `#3d3d3d`.

### Доп. цвета в иллюстрациях (не токены)

Встречаются в SVG на landing: `#14980D`, `#FF3F05`, `#5E6075`, `#0B2641`.

---

## Типографика

### Шрифты

| Семейство | Назначение | Файлы / источник | Начертания |
|---|---|---|---|
| **Ltsuperior** | заголовки (H1–H6) | `/assets/*_ltsuperior-*.otf` | 400, 500, 600, 700 |
| **Inter Tight** | body, ссылки, кнопки, меню | `public/assets/fonts/inter-tight.css` + woff2 | 300, 400, 500, 600, 700 |
| webflow-icons | иконки UI Webflow | inline base64 TTF | — |

CSS:

```css
--_typography---font-family--ltsuperior: Ltsuperior, Arial, sans-serif;
--_typography---font-family--inter-tight: "Inter Tight", sans-serif;
```

### Шкала (desktop, из CSS variables)

| Стиль | Size | Line-height | Letter-spacing | Weight | Font |
|---|---|---|---|---|---|
| H1 | `3.75rem` (60px) | 101% | `-0.125rem` | 400 | Ltsuperior |
| H2 | `2.5rem` (40px) | 120% | `-0.125rem` | 400 | Ltsuperior |
| H3 | `1.875rem` (30px) | 133.334% | `-0.0625rem` | 400 | Ltsuperior |
| H4 | `1.4375rem` (23px) | 130.435% | `-0.05rem` | 400 | Ltsuperior |
| H5 | `1.25rem` (20px) | 135% | `-0.03125rem` | 400 | Ltsuperior |
| H6 | `1.125rem` (18px) | 150% | `-0.01875rem` | 400 | Ltsuperior |
| Body | `1rem` (16px) | 150% | `-0.0125rem` | 400 | Inter Tight |
| Menu | `1.0625rem` (17px) | 105% | `-0.01875rem` | 500 | Inter Tight |
| Button | `0.9375rem` (15px) | 150% | `-0.01875rem` | 600 | Inter Tight |
| Subtext | `0.875rem` (14px) | 125% | `0.125rem` | 600 | Inter Tight |

Веса в токенах: Regular `400`, Medium `500`, Semi Bold `600`, Bold `700`.

---

## Spacing / layout

| Token | Value | ≈ |
|---|---|---|
| `--_site-unit---container--container-main` | `90.625rem` | ~1450px |
| `--_site-unit---container--container-large` | `101.875rem` | ~1630px |
| `--_site-unit---container--container-small` | `2.5rem` | 40px |
| `--_site-unit---section-gap--container-padding` | `0.9375rem` | 15px |
| `--_site-unit---section-gap--section-main-gap` | `8.125rem` | 130px |
| `--_site-unit---section-gap--section-text-gap` | `7.8125rem` | 125px |
| `--_site-unit---section-gap--sub-text-gap` | `1.8rem` | ~29px |
| `--_site-unit---section-gap--card-text-to-solid` | `2.7rem` | ~43px |
| `--_site-unit---section-gap--button-to-paragraph-gap` | `2.1rem` | ~34px |
| `--_site-unit---section-gap--heading-to-paragraph` | `0.7rem` | ~11px |
| `--_site-unit---section-gap--flex-divider` | `1.875rem` | 30px |
| `--_site-unit---section-gap--card-gap-two` | `3.75rem` | 60px |

### Breakpoints (Webflow)

- Desktop: default
- Tablet: `max-width: 991px`
- Mobile landscape: `max-width: 767px`
- Mobile portrait: `max-width: 479px`

---

## Тени

| Имя | box-shadow |
|---|---|
| Small | `0 40px 60px #00000014` |
| Medium | `0 10px 40px #0000002e` |
| Large | `0 4px 42px #00000040` |

---

## Логотипы / favicon

| Файл | Назначение |
|---|---|
| `/assets/69e77e3a5575371c8f02b575_Fav-icon-small.svg` | favicon |
| `/assets/69e77ebce6d0caffdc1d57ed_Fav-icon-big.svg` | apple-touch-icon |
| `/assets/69e1dff579d843e41d5cce2f_…_Logo-black.svg` | логотип на светлом |
| `/assets/69cb733011d1b54116a20cbd_…_Main-logo.svg` | логотип на тёмном |

---

## Страницы

| Route | Описание |
|---|---|
| `/` | Showcase / template landing |
| `/home-one`, `/home-two`, `/home-three` | варианты главной |
| `/about` | о компании |
| `/service-one` … `/service-three` | каталоги услуг |
| `/service-detail/*` | organic-soil, crop-rotation, pest-control, composting |
| `/blog-one` … `/blog-three` | блог-листы |
| `/post/*` | статьи блога (12 шт.) |
| `/contact-one` … `/contact-three` | контакты |
| `/faq`, `/farm-package` | FAQ, пакеты |
| `/style-guide` | цвета, типографика, кнопки, лого |
| `/changelog`, `/license` | служебные |
| `/401`, `/404` | ошибки |

---

## Как устроены стили и скрипты

1. Глобально в `app/app.vue` подключаются Webflow CSS и Inter Tight.
2. Страницы вызывают `useWebflow([...scripts])` — скрипты в `body`, после mount делается `Webflow.destroy` → `ready` → `ix2.init`.
3. Разметка страниц обёрнута в `ClientOnly` + `v-pre` (сырой Webflow HTML без Vue-компиляции шаблона).
4. Layout `default` добавляет `AppNavbar` / `AppFooter`.

Полный визуальный reference: страница **`/style-guide`**.
