---
name: providers
description: >-
  Creates app-level React providers in src/providers/ (toasts, yandex-map,
  tbank). Use for context wiring, service injection. Vendor SDK → providers/.
---

# providers

Rule: `.cursor/rules/providers.mdc`

## Checklist

```
- [ ] Layout: {feature}/index.ts + .partials/ (provider, context)
- [ ] 4-file pattern в .partials/: provider.tsx, provider.interface.ts, context/…
- [ ] index.ts: thin wrapper + export namespace {Name} { export type Props }
- [ ] useEffect: inject service (toastsService.manager) + cleanup
- [ ] Context value: methods + state (useMemo где нужно)
- [ ] Hook — отдельно в src/hooks/{feature}/, не в provider index
- [ ] CSS: @layer mosuk-ui, provider.module.css optional
- [ ] Boolean fields в provider/context — `is*` / `has*` / `can*` (components rule § Props naming)
```

## Структура

```
{feature}/
├── index.ts
└── .partials/
    ├── provider.tsx
    ├── provider.interface.ts
    ├── provider.module.css      ← optional
    ├── context/
    │   ├── context.ts
    │   └── context.interface.ts
    └── {sub}/                   ← optional UI (ToastList)
```

## Component-local provider

Shared state между sub-parts → `{feature}/.partials/providers/` — 4-file pattern в `providers.mdc`.

## Эталоны

| Scope | Path |
| ----- | ---- |
| App + service | `src/providers/toasts/` |
| External SDK | `src/providers/yandex-map/`, `src/providers/tbank/` |
| Component-local | `src/components/stepper/.partials/providers/` |
| Component-local | `src/components/image/.partials/providers/` |
