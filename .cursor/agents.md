# mosuk-ui — принципы проекта

Документ для AI-агента и команды. Описывает **зачем** устроена библиотека так, а не иначе.
Детальные конвенции (CSS layers, файлы) — в [README.md](../README.md) в корне репозитория.

---

## Стек

React 19 · TypeScript · CSS Layers · @base-ui/react · classnames · lucide-react · mosuk-icons

Peer: Next.js, framer-motion · Dev: Tailwind v4 (`@import "tailwindcss"` в `index.css`)

---

## DDD — разделение по слоям

mosuk-ui — **npm UI-библиотека**, не приложение. Упрощённый DDD: **компоненты отделены от инфраструктуры и утилит**.

```
src/
├── components/{texts,actions,display,containers,collections,layouts,overlays,navigation,forms}/
├── integrations/       → внешние SDK; слои как в src/ (vendor → product? → layer)
├── providers/          → React context, app-level wiring
├── hooks/              → потребление providers / browser API
├── services/           → imperative API без React
├── utilities/          → pure formatters
└── styles/             → глобальные токены, theme
```

| Слой | Роль | Пример |
| ---- | ---- | ------ |
| **Components** | Публичный UI, compound | `OTP`, `Drawer`, `Toggle` |
| **Integrations** | Внешние SDK + их UI | `YandexMap`, `TBankProvider` |
| **Providers** | Context + side effects | `ToastsProvider` |
| **Hooks** | React-обёртки над context/API | `useToasts`, `useLocalStorage` |
| **Services** | Singleton / imperative | `toastsService` |
| **Utilities** | Pure functions | `formatPhone`, `formatPrice` |

### Маппинг CRM → mosuk-ui (исторический контекст)

| Было (CRM app) | Стало (mosuk-ui) |
| -------------- | ---------------- |
| `common/{domain}/components/` | `components/{category}/{feature}/` |
| `common/{domain}/hooks/` | `hooks/` (cross-cutting) |
| `shared/microservices/` | `providers/`, `services/` |
| `shared/app/providers/` | `providers/` |
| `app/(app)/.../.partials/` | `{feature}/.partials/` у корня feature |
| `entities/`, CRUD hooks | **нет** — библиотека не знает API CRM |

### Правила DDD в этой библиотеке

1. **Категория = папка** в `components/`. Не смешивать actions и overlays. Внешние SDK — в `integrations/`.
2. **Приватная реализация** — только в `.partials/`; не импортировать извне feature.
3. **Паттерны папок** — `.` private, `()` group, `[]` dynamic (см. architecture rule).
4. **Направление зависимостей:** `components` / `integrations` → `hooks` / `providers` / `utilities` / `services`. Не наоборот.
5. **Публичный API** — только через `index.ts` на уровне feature (см. exports rule).

---

## SOLID — как применяем в React-компонентах

### S — Single Responsibility

- Один файл — одна ответственность: root, sub-part, hook.
- Крупный UI → `{feature}/.partials/components/` + compound в `index.ts`.

### O — Open/Closed

- Расширение через compound (`Object.assign`) и sub-components, не через раздувание props.
- Новый sub-part → новая папка в `.partials/components/`, не `if/else` в monolith.

### L — Liskov Substitution

- Polymorphic (`as`, `ElementType`) сохраняют контракт props.

### I — Interface Segregation

- Props в `component.interface.ts` — только нужное sub-part'у.
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
2. **Эталон OTP** — новый feature копирует дерево `src/components/actions/otp/` (`index.ts` + `.partials/`). Flat `button/` — только если правка самого button.
3. **Named exports** — везде; default только если требует внешний контракт.
4. **Импорты `@/`** везде в `src/`, включая `.partials/`. Публичный API соседнего feature — через его `index.ts`.
5. **Не over-engineer** — без лишних абстракций и преждевременных generic.

---

## Структура `.cursor/`

```
.cursor/
├── agents.md
├── rules/
│   ├── architecture.mdc     ← alwaysApply
│   ├── styling.mdc
│   ├── exports.mdc
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
| Компоненты (все категории) | `.cursor/rules/components.mdc` | `.cursor/skills/components/SKILL.md` |
| Integrations (внешние SDK) | `.cursor/rules/integrations.mdc` | `.cursor/skills/integrations/SKILL.md` |
| Providers + 4-file context | `.cursor/rules/providers.mdc` | `.cursor/skills/providers/SKILL.md` |
| Hooks | `.cursor/rules/hooks.mdc` | `.cursor/skills/hooks/SKILL.md` |
| Services | `.cursor/rules/services.mdc` | `.cursor/skills/services/SKILL.md` |
| Utilities | `.cursor/rules/utilities.mdc` | `.cursor/skills/utilities/SKILL.md` |

---

## Эталоны

| Задача | Смотреть |
| ------ | -------- |
| Канонический компонент | `src/components/actions/otp/` |
| Product skeleton (только карты) | `src/integrations/yandex/maps/` |
| Indicator sub-part | `src/components/actions/checkbox/` |
| Deep compound overlay | `src/components/overlays/drawer/` |
| Shared state в `.partials` | `src/components/navigation/stepper/`, `src/components/display/image/` |
| Flat — только правка этого feature | `src/components/actions/button/`, `src/components/overlays/dialog/`, `src/components/forms/fieldset/` |
| Integration (product / vendor) | `src/integrations/yandex/maps/`, `src/integrations/tbank/` |
| Provider + service | `src/providers/toasts/` |
| Hook over context | `src/hooks/toasts/` |
| CSS layers | [README.md](../README.md) §1–3 |
