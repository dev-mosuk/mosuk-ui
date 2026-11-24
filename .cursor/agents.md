# mosuk-ui — принципы проекта

Документ для AI-агента и команды. Описывает **зачем** устроена библиотека так, а не иначе.
Детальные конвенции (CSS layers, файлы) — в [README.md](../README.md) в корне репозитория.

---

## Стек

React 19 · TypeScript · CSS Layers · @base-ui/react · classnames · lucide-react

Peer: react, react-dom, recharts (optional), tailwindcss · Dev: Tailwind v4 (`@import "tailwindcss"` в `index.css`)

---

## DDD — разделение по слоям

mosuk-ui — **npm UI-библиотека**, не приложение. Упрощённый DDD: **компоненты отделены от инфраструктуры и утилит**.

```
src/
├── blocks/             → page blocks (breadcrumbs/, yandex-map/, …)
├── components/         → плоский список features (button/, drawer/, …)
├── providers/          → React context + SDK providers (toasts, yandex-map, tbank, …)
├── hooks/              → потребление providers / browser API
├── services/           → imperative API без React
├── utilities/          → pure formatters
└── styles/             → глобальные токены, theme
```

| Слой | Роль | Пример |
| ---- | ---- | ------ |
| **Blocks** | Составные UI-блоки страницы | `Breadcrumbs`, `YandexMap` |
| **Components** | Публичный UI, compound (в т.ч. vendor UI) | `InputOtp`, `Accordion`, `TBankTerminal` |
| **Providers** | Context + side effects / SDK | `ToastsProvider`, `YandexMapProvider` |
| **Hooks** | React-обёртки над context/API | `useToasts`, `useStorageLocal` |
| **Services** | Singleton / imperative | `toastsService` |
| **Utilities** | Pure functions | `formatPhone`, `formatPrice` |

### Маппинг CRM → mosuk-ui (исторический контекст)

| Было (CRM app) | Стало (mosuk-ui) |
| -------------- | ---------------- |
| `common/{domain}/components/` | `components/{feature}/` |
| `common/{domain}/hooks/` | `hooks/` (cross-cutting) |
| `shared/microservices/` | `providers/`, `services/` |
| `shared/app/providers/` | `providers/` |
| `app/(app)/.../.partials/` | `{feature}/.partials/` у корня feature |
| `entities/`, CRUD hooks | **нет** — библиотека не знает API CRM |

### Правила DDD в этой библиотеке

1. **Feature = папка** плоско в слое (`blocks/`, `components/`, `hooks/`, …); без category nesting. Vendor UI → `blocks/` или `components/`, SDK → `providers/` (hyphenated).
2. **Приватная реализация** — только в `.partials/`; не импортировать извне feature.
3. **Паттерны папок** — `.` private, `()` group (редко), `[]` dynamic (см. architecture rule). Product-варианты — hyphenated features (`input-mask/`, `storage-local/`).
4. **Направление зависимостей:** `blocks` / `components` → `hooks` / `providers` / `utilities` / `services`. Не наоборот.
5. **Публичный API** — только через `index.ts` на уровне feature (см. exports rule).

---

## SOLID — как применяем в React-компонентах

### S — Single Responsibility

- Один файл — одна ответственность: root, sub-part, hook.
- Крупный UI → `{feature}/.partials/components/` + compound в `index.ts`.

### O — Open/Closed

- Расширение через compound (`Object.assign`) и sub-components, не через раздувание props.
- Новый sub-part → плоская папка в `.partials/components/` (`{part}/` или `{part}-{child}/`), не `if/else` в monolith.

### L — Liskov Substitution

- Polymorphic (`as`, `ElementType`) сохраняют контракт props.

### I — Interface Segregation

- Props в `component.interface.ts` — только нужное sub-part'у.
- Публичные boolean/state — `is*` / `has*` / `can*` (`isDisabled`, `isOpen`, `isSelected` …; не `disabled` / `open` / `checked`); порядок OwnProps — § Props order; defaults только из `.partials/constants/` — § Props defaults. Детали — `.cursor/rules/components.mdc`.
- Hook: `hook.interface.ts` отдельно от `hook.ts`.

### D — Dependency Inversion

- UI зависит от hooks/services через context, не от DOM API напрямую в leaf-компонентах.
- Provider инжектит service (`toastsService.manager(...)`).

---

## Co-location и инкапсуляция

| Паттерн | Смысл |
| ------- | ----- |
| `.partials/` | Приватная реализация у корня feature; не импортировать извне |
| Provider + Context (4 файла) | Состояние без prop drilling |
| `index.ts` | Единственная точка публичного export feature |

---

## Принципы при генерации кода

1. **Минимальный diff** — не рефакторить соседний код без запроса.
2. **Эталон InputOtp** — новый feature копирует дерево `src/components/input-otp/` (`index.ts` + `.partials/`). Flat `button/` — только если правка самого button.
3. **Named exports** — везде; default только если требует внешний контракт.
4. **Импорты `@/`** везде в `src/`, включая `.partials/`. Публичный API соседнего feature — через его `index.ts`.
5. **Не over-engineer** — без лишних абстракций и преждевременных generic.
6. **Playgrounds** — `playgrounds/**` не создавать и не обновлять, пока пользователь явно не попросил.

---

## Структура `.cursor/`

```
.cursor/
├── agents.md
├── rules/
│   ├── architecture.mdc     ← alwaysApply
│   ├── styling.mdc
│   ├── exports.mdc
│   ├── blocks.mdc           ← page blocks (breadcrumbs, yandex-map)
│   ├── components.mdc       ← actions, display, overlays, texts, layouts, collections, navigation, forms
│   ├── integrations.mdc
│   ├── providers.mdc        ← app-level + 4-file context
│   ├── hooks.mdc
│   ├── services.mdc
│   └── utilities.mdc
└── skills/
    ├── architecture/SKILL.md
    ├── styling/SKILL.md
    ├── exports/SKILL.md
    ├── blocks/SKILL.md
    ├── components/SKILL.md
    ├── integrations/SKILL.md
    ├── providers/SKILL.md
    ├── hooks/SKILL.md
    ├── services/SKILL.md
    └── utilities/SKILL.md
```

| Что | Rule | Skill |
| --- | ---- | ----- |
| Паттерны `.` `()` `[]`, структура src | `.cursor/rules/architecture.mdc` | `.cursor/skills/architecture/SKILL.md` |
| CSS layers, z-index | `.cursor/rules/styling.mdc` | `.cursor/skills/styling/SKILL.md` |
| index.ts, namespace, package exports | `.cursor/rules/exports.mdc` | `.cursor/skills/exports/SKILL.md` |
| Page blocks | `.cursor/rules/blocks.mdc` | `.cursor/skills/blocks/SKILL.md` |
| Компоненты (все категории) | `.cursor/rules/components.mdc` | `.cursor/skills/components/SKILL.md` |
| Vendor UI/SDK (в components + providers) | `.cursor/rules/integrations.mdc` | `.cursor/skills/integrations/SKILL.md` |
| Providers + 4-file context | `.cursor/rules/providers.mdc` | `.cursor/skills/providers/SKILL.md` |
| Hooks | `.cursor/rules/hooks.mdc` | `.cursor/skills/hooks/SKILL.md` |
| Services | `.cursor/rules/services.mdc` | `.cursor/skills/services/SKILL.md` |
| Utilities | `.cursor/rules/utilities.mdc` | `.cursor/skills/utilities/SKILL.md` |

---

## Эталоны

| Задача | Смотреть |
| ------ | -------- |
| Канонический компонент | `src/components/input-otp/` |
| Page block | `src/blocks/breadcrumbs/`, `src/blocks/yandex-map/` |
| Indicator sub-part | `src/components/checkbox/` |
| Deep compound folders | `src/components/popover/` |
| Deep portal behavior | `src/components/drawer/` |
| Shared state в `.partials` | `src/components/stepper/`, `src/components/image/` |
| Vendor UI / SDK provider | `src/blocks/yandex-map/`, `src/providers/tbank/` |
| Provider + service | `src/providers/toasts/` |
| Hook over context | `src/hooks/toasts/` |
| CSS layers | [README.md](../README.md) §1–3 |
