# mosuk UI

UI библиотека компонентов с использованием CSS Layers для управления каскадом стилей.

## 1. Основные слои

```css
@layer theme, base, mosuk-ui, components, utilities;
```

## 2. z-index

1. **0–99** — обычные компоненты (контент, карточки, формы)
2. **100–199** — dropdown, popover, tooltip и другие всплывающие элементы
3. **200+** — dialog, drawer, модальные окна

## 3. Структура индексов внутри `mosuk-ui`

### 3.1. Компоненты (1-й уровень)

1. **index-0 до index-9** — зарезервировано для технических слоёв (providers, utilities)
2. **index-10** — texts (заголовки, параграфы, ссылки)
3. **index-11** — actions (кнопки, инпуты, формы)
4. **index-12** — display (карточки, изображения, видео)
5. **index-13** — containers (секции, сетки, контейнеры)
6. **index-14** — collections (таблицы, аккордеоны, табы)
7. **index-15** — integrations (внешние интеграции)
8. **index-16** — layouts (header, sidebar, tabbar)
9. **index-17** — overlays (диалоги, dropdown, модальные окна)

### 3.2. Варианты компонентов (2-й уровень)

1. **Базовый компонент**: `index-11` (например, `button`)
2. **Вариант 1**: `index-21` (например, `button/submit`)
3. **Вариант 2**: `index-31` (например, `button/delete`)

## 4. Примеры использования

```css
/* Базовый компонент кнопки */
@layer mosuk-ui {
  @layer index-11 {
    .button {
      /* стили */
    }
  }
}

/* Вариант кнопки submit */
@layer mosuk-ui {
  @layer index-21 {
    .button {
      /* переопределённые стили */
    }
  }
}
```

## 5. Файловая структура

```
src/
├── components/
│   ├── texts/          # index-10
│   ├── actions/        # index-11, 21, 31...
│   ├── display/        # index-12, 22, 32...
│   ├── containers/     # index-13
│   ├── collections/    # index-14
│   ├── layouts/        # index-16
│   └── overlays/       # index-17, 27, 37...
├── integrations/       # index-15 — внешние SDK (yandex/maps, tbank, …)
└── providers/          # index-0
```

## 6. Разработка и подключение в CRM

Архитектура, naming и конвенции кода — в [.cursor/agents.md](./.cursor/agents.md).

### 6.1. Локальная разработка библиотеки

**Одноразовая сборка:**

```bash
npm run build
```

Цепочка: `tsc` → `tsc-alias` (переписывает `@/` в относительные пути) → генерация `dist/package.json` и exports.

**Watch при параллельной работе с CRM** — в отдельном терминале, пока в CRM крутится `next dev`:

```bash
npm run build:watch
```

Сначала выполняется полный `build`, затем параллельно `tsc -w` и `tsc-alias -w`. Изменения в `src/` попадают в `dist/` — CRM подхватывает их через link без переустановки пакета.

**Линт и миграция импортов:**

```bash
npm run lint
npm run migrate:imports -- --dry-run   # просмотр
npm run migrate:imports -- --apply     # замена ./../ на @/
```

### 6.2. Линковка в CRM

**Первичное подключение:**

```bash
# 1. В .mosuk-ui/
npm run link:dist          # build + npm link из dist/

# 2. В корне CRM
npm link mosuk-ui          # node_modules/mosuk-ui → .mosuk-ui/dist
```

`dist/package.json` → exports на `index.js` с **относительными** импортами (после `tsc-alias`).

**Настройка CRM (Next.js):** в `next.config` добавьте `transpilePackages: ['mosuk-ui']`, чтобы Next.js транспилировал linked-пакет.

**Повседневный цикл:**

| Терминал | Команда |
| -------- | ------- |
| CRM | `next dev` |
| mosuk-ui | `npm run build:watch` |

После правок в `src/` достаточно сохранить файл — watch обновит `dist/`, CRM пересоберёт страницу.

**Отвязка:**

```bash
# В CRM
npm unlink mosuk-ui && npm install

# В .mosuk-ui/dist (при необходимости)
npm unlink
```

### 6.3. Почему `dist/`, а не `src/`

В `src/` импорты используют alias `@/` → `src/` (см. `tsconfig.json`). **`tsc` не переписывает их** — это делает `tsc-alias` при сборке в `dist/`. Next.js в CRM резолвит `@/` как `./src/*` **своего** проекта, поэтому линковка **исходников** (`src/`) ломает бандлер:

```
Can't resolve '@/components/actions/button/component/component'
Import map: aliased to relative './src/components/...' inside of [project]/
```

`src/package.json` и exports на `.ts` — для генерации exports (`npm run watch`) и разработки **внутри** mosuk-ui, **не** для потребителей Next.js.

| Линковка | Результат |
| -------- | --------- |
| `dist/` (`npm run link:dist`) | OK — в `.js` относительные импорты |
| `src/` (`cd src && npm link`) | Ошибка резолва `@/` в Next.js CRM |

**Не линковать `src/`.**

### 6.4. Импорты

**В `src/` — только `@/`:**

- Alias: `"@/*": ["src/*"]` в `tsconfig.json`
- Относительные `./…` и `../…` **запрещены** ESLint (`@typescript-eslint/no-restricted-imports`)
- Полный путь до файла, включая `.partials/` и `(group)/` сегменты
- Named export везде; точечные `index.ts` на feature, без barrel всего `src/`

**В `dist/` — относительные пути:** после `npm run build` `tsc-alias` заменяет `@/` на относительные пути в emit. Потребитель (CRM, npm) получает обычные `.js` с `./` и `../`.

**ESLint: `export namespace` в `index.ts`:** в `**/index.ts` правило `@typescript-eslint/no-namespace` **отключено** — публичный API compound-компонентов через `export namespace Feature { export type Props = … }` (см. `.cursor/rules/(exports)/rule.mdc`).

### 6.5. Полезные npm scripts

| Script | Назначение |
| ------ | ---------- |
| `npm run build` | Сборка `dist/`: tsc + tsc-alias + генерация exports |
| `npm run build:watch` | Watch-сборка для разработки вместе с CRM |
| `npm run link:dist` | `build` + `npm link` из `dist/` |
| `npm run watch` | Генерация exports в `src/` (не для CRM link) |
| `npm run lint` | ESLint по `src/` |
| `npm run migrate:imports -- --dry-run` | Превью миграции relative → `@/` |
| `npm run migrate:imports -- --apply` | Применить миграцию импортов |

### 6.6. Опубликованный пакет (без link)

Публиковать и ставить из npm — артефакт `dist/` (`npm run build` перед publish). В CRM: `"mosuk-ui": "^1.0.x"` без `npm link`.
