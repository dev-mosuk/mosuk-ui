---
name: providers
description: >-
  Creates app-level React providers in src/providers/ (alerts, yandex, tbank).
  Use for context wiring, SDK init, service injection.
---

# providers

Rule: `.cursor/rules/providers/rule.mdc` · Context: `.cursor/rules/providers/context/rule.mdc`

## Checklist

```
- [ ] 4-file pattern: provider.tsx, provider.interface.ts, context/context.ts, context.interface.ts
- [ ] index.ts: thin wrapper + export namespace {Name} { export type Props }
- [ ] useEffect: inject service (alertsService.manager) + cleanup
- [ ] Context value: methods + state (useMemo где нужно)
- [ ] Hook — отдельно в src/hooks/{feature}/, не в provider index
- [ ] CSS: @layer index-0, provider.module.css optional
```

## Структура

```
{feature}/
├── index.ts
├── provider.tsx
├── provider.interface.ts
├── provider.module.css      ← optional
├── context/
│   ├── context.ts
│   └── context.interface.ts
└── {sub}/                   ← optional UI (ToastList)
```

## Component-local provider

Toggle-style → `component/.partials/providers/` — см. context rule.

## Эталоны

| Scope | Path |
| ----- | ---- |
| App + service | `src/providers/alerts/` |
| External SDK | `src/providers/yandex/maps/` |
| Component-local | `src/components/actions/toggle/component/.partials/providers/` |
