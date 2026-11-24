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
- [ ] Sub-parts плоско: `{part}/`, глубокий compound — `{part}-{child}/` (эталон `popover/`)
- [ ] Файлы: component.tsx, hook.ts — по таблице rule
- [ ] Export: named через index.ts feature
- [ ] Imports: `@/` везде в `src/`, включая `.partials/`; публичный API feature — через его `index.ts`
- [ ] Props: component.interface.ts (не .props.ts для нового кода)
- [ ] Public booleans → `is*` / `has*` / `can*` (components rule § Props naming)
- [ ] OwnProps order → § Props order; defaults → `.partials/constants/component.constants.ts` (§ Props defaults)
- [ ] playgrounds/** — не трогать, пока пользователь явно не попросил
```

## Паттерны папок

| Маркер | Когда |
| ------ | ----- |
| `.partials/` | component-local UI, styles, constants, hooks, providers |
| `(autosize)/` | редкая группа в `src/`, не часть export-имени |
| `[id]/` | dynamic/param (если появится) |

Варианты product-level — hyphenated features: `input-mask/`, `slider-cell/`.

## Куда класть

| Что | Путь |
| --- | ---- |
| UI component | `components/{feature}/` |
| Page block | `blocks/{feature}/` (breadcrumbs, yandex-map) |
| Vendor UI | `blocks/` или `components/{hyphenated}/` (yandex-map → blocks, tbank-terminal → components) |
| App / SDK provider | `providers/{feature}/` |
| Hook | `hooks/{feature}/` или `.partials/hooks/` |
| Service | `services/{feature}/` |
| Utility | `utilities/{domain}/` |

## Sub-skills

| Слой | Skill |
| ---- | ----- |
| Blocks | [blocks/SKILL.md](../blocks/SKILL.md) |
| Components | [components/SKILL.md](../components/SKILL.md) |
| Integrations | [integrations/SKILL.md](../integrations/SKILL.md) |
| Styling | [styling/SKILL.md](../styling/SKILL.md) |
| Exports | [exports/SKILL.md](../exports/SKILL.md) |
| Providers | [providers/SKILL.md](../providers/SKILL.md) |
| Hooks | [hooks/SKILL.md](../hooks/SKILL.md) |
| Services | [services/SKILL.md](../services/SKILL.md) |
| Utilities | [utilities/SKILL.md](../utilities/SKILL.md) |

## Эталоны

- Component: `src/components/input-otp/`
- Block: `src/blocks/breadcrumbs/`, `src/blocks/yandex-map/`
- Accordion: `src/components/accordion/`
- Navigation: `src/components/stepper/`
- Segment: `src/components/segment/`
- Toggle: `src/components/toggle/`
- Popover: `src/components/popover/`
- Deep compound folders: `src/components/popover/` (`close/`, `overview/`, `overview-popup/`)
- Deep portal behavior: `src/components/drawer/`
- Vendor UI: `src/blocks/yandex-map/`, `src/components/tbank-terminal/`
- Vendor SDK: `src/providers/yandex-map/`, `src/providers/tbank/`
- Provider: `src/providers/toasts/`
- Hook: `src/hooks/toasts/`, `src/hooks/storage-local/`
- Service: `src/services/toasts/`, `src/services/storage-local/`
- Utility: `src/utilities/phone/`
