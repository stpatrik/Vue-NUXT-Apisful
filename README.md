# Vue-NUXT-Apisful (Kluber Shop)

Проект на Nuxt.js 2: SPA c генерацией статического сайта (target: static) и автодеплоем на GitHub Pages.

## Технологии
- Nuxt.js 2 (Vue 2)
- Axios (работа с API)
- nuxt-lazy-load (ленивая загрузка изображений)
- Sass (SCSS)
- ESLint + Stylelint

## Быстрый старт (локально)
```bash
# Установка зависимостей
yarn install

# Режим разработки (http://localhost:3000)
yarn dev

# Продакшен-сборка (SSR)
yarn build && yarn start

# Статическая генерация (для GitHub Pages)
yarn generate
```
Примечание: если у тебя Windows и при клоне падает из-за файла с пробелом в конце имени, используй clone без checkout + sparse-checkout, или работай через GitHub Web / WSL.

## Деплой на GitHub Pages (уже настроено)
- В nuxt.config.js установлено:
  - router.base = '/Vue-NUXT-Apisful/'
  - generate.fallback = '404.html' (SPA-роутинг через 404.html)
- В репозитории есть .github/workflows/deploy.yml — GitHub Actions автоматически собирает проект командой `yarn generate` и деплоит папку dist на Pages.
- В Settings → Pages выбери Source: GitHub Actions.

После пуша сайт будет доступен по адресу:
https://stpatrik.github.io/Vue-NUXT-Apisful/

## Структура проекта
```
.
├── assets/         # глобальные стили, изображения
├── components/     # Vue-компоненты
├── layouts/        # шаблоны страниц
├── middleware/     # middleware Nuxt
├── pages/          # страницы приложения
├── plugins/        # плагины
├── static/         # статические файлы (favicon и т.п.)
├── nuxt.config.js  # конфигурация Nuxt
└── package.json
```

## Частые проблемы
- Windows: ошибка invalid path 'file ' при клоне. Решение: git clone --no-checkout + sparse-checkout c исключением проблемного файла, либо WSL/SSH-клон, либо загрузка файлов через GitHub Web.
- Pages отдает 404 на вложенных ссылках. Решение: generate.fallback = '404.html' в nuxt.config.js и router.base = '/Vue-NUXT-Apisful/'.

## Лицензия
MIT
