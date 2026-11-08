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
- [ ] Файлы: component.tsx, hook.ts — по таблице rule
- [ ] Export: named через index.ts feature
- [ ] Imports: относительные внутри feature; cross-feature через index.ts
- [ ] Props: component.interface.ts (не .props.ts для нового кода)
```

## Паттерны папок

| Маркер | Когда |
| ------ | ----- |
| `.partials/` | component-local UI, styles, hooks, providers |
| `(mask)/`, `(autosize)/` | группа в `src/`, не часть export-имени |
| `[id]/` | dynamic/param (если появится) |

## Куда класть

| Что | Путь |
| --- | ---- |
| UI component | `components/{category}/{feature}/` |
| External SDK | `integrations/{vendor}/` или `integrations/{vendor}/{product}/` |
| App provider | `providers/{feature}/` |
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

- Component: `src/components/actions/otp/`
- Navigation: `src/components/navigation/stepper/`, `src/components/navigation/breadcrumbs/`
- Deep compound overlay: `src/components/overlays/drawer/`
- Integration (product): `src/integrations/yandex/maps/`
- Integration (vendor): `src/integrations/tbank/`
- Provider: `src/providers/alerts/`
- Hook: `src/hooks/alerts/`
- Service: `src/services/alerts/`
- Utility: `src/utilities/phone/`
