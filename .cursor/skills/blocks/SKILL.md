---
name: blocks
description: >-
  Creates mosuk-ui page blocks in src/blocks/{feature}/ (breadcrumbs, yandex-map).
  Use when building page-level UI blocks that are not leaf components. When the
  API shape, public sub-parts, or exemplar are not named, ask one frontier
  round and wait before writing files.
---

# blocks

Rule: `.cursor/rules/blocks.mdc`

Новый feature:

```
{feature}/
├── index.ts
└── .partials/
    ├── styles/component.module.css
    ├── components/{component.tsx, component.interface.ts, {part}/, {part}-{child}/}
    ├── constants/component.constants.ts  ← defaults пропов, если есть
    ├── providers/                    ← если sub-parts делят state
    └── hooks/
```

Импорты `@/`. Публичный API — `{feature}/index.ts` → `mosuk-ui/blocks/{feature}`. Leaf UI — в `components/`; сюда только составные блоки страницы.

## 1. Факты

Эталон — `src/blocks/breadcrumbs/` или `src/blocks/yandex-map/`. Primitive — поиск в `@base-ui/react`. Публичные boolean/state — `is*` / `default*` / `on*Change` (components rule § Props naming); OwnProps order — § Props order; defaults только из `.partials/constants/` (§ Props defaults).

Это не вопросы пользователю.

Готово, когда названы эталон и primitive — или явно зафиксировано, что primitive нет.

## 2. Фронтир

Спросить только то, чего нет в запросе и нельзя вывести из кода. Один раунд, затем стоп: файлов в этом ходе нет.

Доставка — AskQuestion. Рекомендуемый вариант первым:

```
❓ Q1 — <решение>: <тело, варианты>
➡️ <рекомендация>
```

Спрашивать, если запрос это не закрыл:

- публичные sub-parts
- какой primitive, если подходят несколько
- controlled value, если неочевидно

Папки, алиас, имя файла, z-index и порядок `classNames` — факты. Их не спрашивать.

Готово, когда открытых решений не осталось.

## 3. Сборка

Открыть у эталона `index.ts`, root `component.tsx`, `component.interface.ts`, css и один sub-part. Повторить их форму. Стили — [styling/SKILL.md](../styling/SKILL.md). Export — [exports/SKILL.md](../exports/SKILL.md).

Готово, когда:

- public API только из `{feature}/index.ts`
- каждый part имеет `component.interface.ts`
- публичные boolean/state — `is*` / `has*` / `can*` (маппинг на Base UI внутри `.tsx`; § Props naming)
- OwnProps order по § Props order; defaults только из `.partials/constants/` (§ Props defaults)
- стили в `@layer mosuk-ui`
- импорты `@/`
- `.partials` импортируется только из этого feature
- `playgrounds/**` не трогали (только по явному запросу)
