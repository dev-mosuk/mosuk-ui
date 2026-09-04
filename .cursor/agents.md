# mosuk-ui — принципы проекта

Документ для AI-агента и команды. Описывает **зачем** устроена библиотека так, а не иначе.
Детальные конвенции (CSS layers, index-N, файлы) — в [README.md](../README.md) в корне репозитория.

---

## Стек

React 19 · TypeScript · CSS Layers · @base-ui/react · classnames · lucide-react · mosuk-icons

Peer: Next.js, framer-motion · Dev: Tailwind v4 (`@import "tailwindcss"` в `index.css`)

---

## DDD — разделение по слоям

mosuk-ui — **npm UI-библиотека**, не приложение. Упрощённый DDD: **компоненты отделены от инфраструктуры и утилит**.

```
src/
├── components/{texts,actions,display,containers,collections,layouts,overlays,forms}/
├── integrations/       → внешние SDK; слои как в src/ (vendor → product? → layer)
├── providers/          → React context, app-level wiring
├── hooks/              → потребление providers / browser API
├── services/           → imperative API без React
├── utilities/          → pure formatters
└── styles/             → глобальные токены, theme
```

| Слой | Роль | Пример |
| ---- | ---- | ------ |
| **Components** | Публичный UI, compound, skeleton | `OTP`, `Drawer`, `Toggle` |
| **Integrations** | Внешние SDK + их UI | `YandexMap`, `TBankProvider` |
| **Providers** | Context + side effects | `AlertsProvider` |
| **Hooks** | React-обёртки над context/API | `useAlerts`, `useLocalStorage` |
| **Services** | Singleton / imperative | `alertsService` |
| **Utilities** | Pure functions | `formatPhone`, `formatPrice` |

### Маппинг CRM → mosuk-ui (исторический контекст)

| Было (CRM app) | Стало (mosuk-ui) |
| -------------- | ---------------- |
| `common/{domain}/components/` | `components/{category}/{feature}/` |
| `common/{domain}/hooks/` | `hooks/` (cross-cutting) |
| `shared/microservices/` | `providers/`, `services/` |
| `shared/app/providers/` | `providers/` |
| `app/(app)/.../.partials/` | `component/.partials/` внутри feature |
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

- Один файл — одна ответственность: root, sub-part, skeleton, hook.
- Крупный UI → `component/.partials/components/` + compound в `index.ts`.

### O — Open/Closed

- Расширение через compound (`Object.assign`) и sub-components, не через раздувание props.
- Новый sub-part → новая папка в `.partials/components/`, не `if/else` в monolith.

### L — Liskov Substitution

- Polymorphic (`as`, `ElementType`) сохраняют контракт props.
- Skeleton зеркалит layout и **переиспользует** CSS module компонента.

### I — Interface Segregation

- Props в `component.interface.ts` — только нужное sub-part'у.
- Hook: `hook.interface.ts` отдельно от `hook.ts`.

### D — Dependency Inversion

- UI зависит от hooks/services через context, не от DOM API напрямую в leaf-компонентах.
- Provider инжектит service (`alertsService.manager(...)`).

---

## Co-location и инкапсуляция

| Паттерн | Смысл |
| ------- | ----- |
| `.partials/` | Приватная реализация feature; не импортировать извне |
| `component/` + `skeleton/` | Пара для loading states |
| Provider + Context (4 файла) | Состояние без prop drilling |
| `index.ts` | Единственная точка публичного export feature |

---

## Принципы при генерации кода

1. **Минимальный diff** — не рефакторить соседний код без запроса.
2. **Эталон OTP** — новые компоненты копируют `src/components/actions/otp/`, не legacy `button/`.
3. **Named exports** — везде; default только если требует внешний контракт.
4. **Относительные импорты** внутри feature; cross-feature — через `index.ts` потребителя.
5. **Не over-engineer** — без лишних абстракций и преждевременных generic.

---

## Структура `.cursor/`

```
.cursor/
├── agents.md
├── rules/
│   ├── (architecture)/rule.mdc     ← alwaysApply
│   ├── (styling)/rule.mdc
│   ├── (exports)/rule.mdc
│   ├── components/
│   │   ├── rule.mdc
│   │   ├── actions/rule.mdc
│   │   ├── display/rule.mdc
│   │   ├── overlays/rule.mdc
│   │   ├── texts/rule.mdc
│   │   ├── layouts/rule.mdc
│   │   ├── collections/rule.mdc
│   │   └── forms/rule.mdc
│   ├── integrations/rule.mdc
│   ├── providers/rule.mdc
│   ├── providers/context/rule.mdc
│   ├── hooks/rule.mdc
│   ├── services/rule.mdc
│   └── utilities/rule.mdc
└── skills/
    ├── (architecture)/SKILL.md
    ├── (styling)/SKILL.md
    ├── (exports)/SKILL.md
    ├── components/SKILL.md (+ actions, overlays, display)
    ├── integrations/SKILL.md
    ├── providers/SKILL.md
    ├── hooks/SKILL.md
    ├── services/SKILL.md
    └── utilities/SKILL.md
```

| Что | Rule | Skill |
| --- | ---- | ----- |
| Паттерны `.` `()` `[]`, структура src | `.cursor/rules/(architecture)/rule.mdc` | `.cursor/skills/(architecture)/SKILL.md` |
| CSS layers, index-N, z-index | `.cursor/rules/(styling)/rule.mdc` | `.cursor/skills/(styling)/SKILL.md` |
| index.ts, namespace, package exports | `.cursor/rules/(exports)/rule.mdc` | `.cursor/skills/(exports)/SKILL.md` |
| Компоненты (orchestrator) | `.cursor/rules/components/rule.mdc` | `.cursor/skills/components/SKILL.md` |
| Actions (OTP canonical) | `.cursor/rules/components/actions/rule.mdc` | `.cursor/skills/components/actions/SKILL.md` |
| Display | `.cursor/rules/components/display/rule.mdc` | `.cursor/skills/components/display/SKILL.md` |
| Overlays | `.cursor/rules/components/overlays/rule.mdc` | `.cursor/skills/components/overlays/SKILL.md` |
| Texts, layouts, collections, forms | `.cursor/rules/components/{category}/rule.mdc` | → rule + components/SKILL.md |
| Integrations (внешние SDK) | `.cursor/rules/integrations/rule.mdc` | `.cursor/skills/integrations/SKILL.md` |
| Providers | `.cursor/rules/providers/rule.mdc` | `.cursor/skills/providers/SKILL.md` |
| Provider 4-file pattern | `.cursor/rules/providers/context/rule.mdc` | (см. providers skill) |
| Hooks | `.cursor/rules/hooks/rule.mdc` | `.cursor/skills/hooks/SKILL.md` |
| Services | `.cursor/rules/services/rule.mdc` | `.cursor/skills/services/SKILL.md` |
| Utilities | `.cursor/rules/utilities/rule.mdc` | `.cursor/skills/utilities/SKILL.md` |

---

## Эталоны

| Задача | Смотреть |
| ------ | -------- |
| Канонический компонент + skeleton | `src/components/actions/otp/` |
| Compound + provider в .partials | `src/components/actions/toggle/` |
| Deep compound overlay | `src/components/overlays/drawer/` |
| Checkbox (как OTP) | `src/components/actions/checkbox/` |
| Legacy flat (не копировать) | `src/components/actions/button/` |
| Integration (product / vendor) | `src/integrations/yandex/maps/`, `src/integrations/tbank/` |
| Provider + service | `src/providers/alerts/` |
| Hook over context | `src/hooks/alerts/` |
| CSS layers index-N | [README.md](../README.md) §1–3 |
