---
name: architecture
description: >-
  Applies global naming, folder patterns (. ( ) [ ]), and file structure when
  creating artifacts in src/. Use when naming files, folders, exports.
---

# architecture

Rule: `.cursor/rules/architecture.mdc`

## Checklist

```
- [ ] Папки: . приватное, ( ) группа, [ ] dynamic — по смыслу
- [ ] Sub-parts плоско: `{part}/`, глубокий compound — `{part}-{child}/` (эталон `dropdown/`)
- [ ] Файлы: component.tsx, hook.ts — по таблице rule
- [ ] Export: named через index.ts feature
- [ ] Imports: `@/` везде в `src/`, включая `.partials/`; публичный API feature — через его `index.ts`
- [ ] Props: component.interface.ts (не .props.ts для нового кода)
```

## Паттерны папок

| Маркер | Когда |
| ------ | ----- |
| `.partials/` | component-local UI, styles, hooks, providers |
| `(autosize)/` | редкая группа в `src/`, не часть export-имени |
| `[id]/` | dynamic/param (если появится) |

Варианты product-level — hyphenated features: `input-mask/`, `slider-cell/`.

## Куда класть

| Что | Путь |
| --- | ---- |
| UI component | `components/{feature}/` |
| Vendor UI | `components/{hyphenated}/` (yandex-maps, tbank-terminal) |
| App / SDK provider | `providers/{feature}/` |
| Hook | `hooks/{feature}/` или `.partials/hooks/` |
| Service | `services/{feature}/` |
| Utility | `utilities/{domain}/` |

## Sub-skills

| Слой | Skill |
| ---- | ----- |
| Components | [components/SKILL.md](../components/SKILL.md) |
| Integrations | [integrations/SKILL.md](../integrations/SKILL.md) |
| Styling | [styling/SKILL.md](../styling/SKILL.md) |
| Exports | [exports/SKILL.md](../exports/SKILL.md) |
| Providers | [providers/SKILL.md](../providers/SKILL.md) |
| Hooks | [hooks/SKILL.md](../hooks/SKILL.md) |
| Services | [services/SKILL.md](../services/SKILL.md) |
| Utilities | [utilities/SKILL.md](../utilities/SKILL.md) |

## Эталоны

- Component: `src/components/otp/`
- Navigation: `src/components/stepper/`
- Breadcrumbs: `src/components/breadcrumbs/`
- Toggle: `src/components/toggle/`
- Dropdown: `src/components/dropdown/`
- Deep compound folders: `src/components/dropdown/` (`close/`, `overview/`, `overview-popup/`)
- Deep portal behavior: `src/components/drawer/`
- Vendor UI: `src/components/yandex-maps/`, `src/components/tbank-terminal/`
- Vendor SDK: `src/providers/yandex-maps/`, `src/providers/tbank/`
- Provider: `src/providers/toasts/`
- Hook: `src/hooks/toasts/`, `src/hooks/storage-local/`
- Service: `src/services/toasts/`, `src/services/storage-local/`
- Utility: `src/utilities/phone/`
