---
name: components
description: >-
  Creates mosuk-ui UI in src/components/{feature}/: actions (InputOtp, checkbox),
  display (image, empty), overlays (drawer, dialog), popover, texts,
  collections, navigation (stepper), segment, toggle, forms. Use when building
  components or deep compound on @base-ui/react. Page blocks (breadcrumbs,
  yandex-map) → blocks skill. When the API shape, public sub-parts, or
  exemplar are not named, ask one frontier round and wait before writing files.
---

# components

Rule: `.cursor/rules/components.mdc`

Новый feature:

```
{feature}/
├── index.ts
└── .partials/
    ├── styles/component.module.css
    ├── components/{component.tsx, component.interface.ts, {part}/, {part}-{child}/}
    ├── constants/component.constants.ts  ← defaults пропов
    ├── providers/                    ← если sub-parts делят state
    └── hooks/
```

Импорты `@/`. Публичный API — `{feature}/index.ts` → `mosuk-ui/components/{feature}`. Feature `{Name}Skeleton` не создаём. Идиома, z-index и карта эталонов — в правиле.

Vendor UI (Yandex Maps, T-Bank) — обычные features в `components/`; SDK-providers — в `providers/`. См. [integrations/SKILL.md](../integrations/SKILL.md).

## 1. Факты

Роль (actions / overlays / …) — из правила (логическая, не папка). Ближайший эталон — из карты эталонов в правиле. Primitive — поиск в `@base-ui/react`. Публичные boolean/state — `is*` / `default*` / `on*Change` (components rule § Props naming); OwnProps order — § Props order; defaults только из `.partials/constants/` (§ Props defaults). DOM-имена (`disabled`, `open`) наружу не экспортировать.

Это не вопросы пользователю.

Готово, когда названы роль, эталон и primitive — или явно зафиксировано, что primitive нет.

## 2. Фронтир

Спросить только то, чего нет в запросе и нельзя вывести из кода. Один раунд, затем стоп: файлов в этом ходе нет.

Доставка — AskQuestion. Рекомендуемый вариант первым. Вопрос сформулирован так, что согласие с ним закрывает ветку:

```
❓ Q1 — <решение>: <тело, варианты>
➡️ <рекомендация>
```

Спрашивать, если запрос это не закрыл:

- публичные sub-parts
- какой primitive, если подходят несколько
- controlled value, если неочевидно
- polymorphic `as` или фиксированный тег

Папки, алиас, имя файла, z-index и порядок `classNames` — факты. Их не спрашивать.

Запрос, который уже закрывает фронтир, шаг пропускает. Пример: «InputOtp на `@base-ui/react/otp-field`, части Root и Input».

Готово, когда открытых решений не осталось.

## 3. Сборка

Открыть у эталона `index.ts`, root `component.tsx`, `component.interface.ts`, css и один sub-part. Повторить их форму. Глубокий compound — плоские папки как в `src/components/popover/` (`overview/`, `overview-popup/`), не вложенное дерево. Стили — [styling/SKILL.md](../styling/SKILL.md). Export — [exports/SKILL.md](../exports/SKILL.md). Provider внутри feature — [providers/SKILL.md](../providers/SKILL.md).

Готово, когда:

- public API только из `{feature}/index.ts`
- каждый part имеет `component.interface.ts`
- публичные boolean/state — `is*` / `has*` / `can*` (маппинг на Base UI внутри `.tsx`; § Props naming)
- OwnProps order по § Props order; defaults только из `.partials/constants/` (§ Props defaults)
- стили в `@layer mosuk-ui`
- импорты `@/`
- `.partials` импортируется только из этого feature
- `playgrounds/**` не трогали (только по явному запросу)
