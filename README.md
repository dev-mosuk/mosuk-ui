# mosuk UI

UI библиотека компонентов с использованием CSS Layers для управления каскадом стилей.

## 1. Основные слои

```css
@layer theme, base, mosuk-ui, components, utilities;
```

Все стили компонентов — внутри `@layer mosuk-ui`.

## 2. z-index

1. **0–99** — обычные компоненты (контент, карточки, формы)
2. **100–199** — popover, tooltip и другие всплывающие элементы
3. **200+** — dialog, drawer, модальные окна

## 3. Примеры использования

```css
@layer mosuk-ui {
  .root {
    /* стили */
  }
}
```

## 4. Файловая структура

```
src/
├── blocks/             # page blocks: breadcrumbs/, yandex-map/, …
├── components/         # плоский список features: button/, drawer/, …
├── providers/          # toasts, yandex-map, yandex-metrika, tbank, …
├── hooks/
└── services/
```

## 5. Разработка и подключение в CRM

Архитектура, naming и конвенции кода — в [.cursor/agents.md](./.cursor/agents.md).

### 5.1. Локальная разработка библиотеки

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

### 5.2. Линковка в CRM

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

### 5.3. Почему `dist/`, а не `src/`

В `src/` импорты используют alias `@/` → `src/` (см. `tsconfig.json`). **`tsc` не переписывает их** — это делает `tsc-alias` при сборке в `dist/`. Next.js в CRM резолвит `@/` как `./src/*` **своего** проекта, поэтому линковка **исходников** (`src/`) ломает бандлер:

```
Can't resolve '@/components/button/component/component'
Import map: aliased to relative './src/components/...' inside of [project]/
```

`src/package.json` и exports на `.ts` — для генерации exports (`npm run watch`) и разработки **внутри** mosuk-ui, **не** для потребителей Next.js.

| Линковка | Результат |
| -------- | --------- |
| `dist/` (`npm run link:dist`) | OK — в `.js` относительные импорты |
| `src/` (`cd src && npm link`) | Ошибка резолва `@/` в Next.js CRM |

**Не линковать `src/`.**

### 5.4. Импорты

**В `src/` — только `@/`:**

- Alias: `"@/*": ["src/*"]` в `tsconfig.json`
- Относительные `./…` и `../…` **запрещены** ESLint (`@typescript-eslint/no-restricted-imports`)
- Полный путь до файла, включая `.partials/` и `(group)/` сегменты
- Named export везде; точечные `index.ts` на feature, без barrel всего `src/`

**В `dist/` — относительные пути:** после `npm run build` `tsc-alias` заменяет `@/` на относительные пути в emit. Потребитель (CRM, npm) получает обычные `.js` с `./` и `../`.

**ESLint: `export namespace` в `index.ts`:** в `**/index.ts` правило `@typescript-eslint/no-namespace` **отключено** — публичный API compound-компонентов через `export namespace Feature { export type Props = … }` (см. `.cursor/rules/exports.mdc`).

### 5.5. Полезные npm scripts

| Script | Назначение |
| ------ | ---------- |
| `npm run build` | Сборка `dist/`: tsc + tsc-alias + генерация exports |
| `npm run build:watch` | Watch-сборка для разработки вместе с CRM |
| `npm run link:dist` | `build` + `npm link` из `dist/` |
| `npm run watch` | Генерация exports в `src/` (не для CRM link) |
| `npm run lint` | ESLint по `src/` |
| `npm run migrate:imports -- --dry-run` | Превью миграции relative → `@/` |
| `npm run migrate:imports -- --apply` | Применить миграцию импортов |

### 5.6. Опубликованный пакет (без link)

Публиковать и ставить из npm — артефакт `dist/` (`npm run build` перед publish). В CRM: `"mosuk-ui": "^1.0.x"` без `npm link`.
