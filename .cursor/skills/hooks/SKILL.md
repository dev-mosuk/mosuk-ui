---
name: hooks
description: >-
  Creates React hooks in src/hooks/ or {feature}/.partials/hooks/.
  Use for context consumers, browser storage wrappers.
---

# hooks

Rule: `.cursor/rules/hooks.mdc`

## Checklist

```
- [ ] Layout: {feature}/index.ts + .partials/{hook.ts, hook.interface.ts}
- [ ] Naming: use{Name} → Use{Name}Props; feature — hyphenated flat
- [ ] Context hook: import context из providers/, guard throw обязателен
- [ ] index.ts: re-export hook + namespace use{Name} { export type Props }
- [ ] Без JSX (кроме rare render hooks — избегать)
- [ ] Без axios/SWR — это concern приложения-потребителя
- [ ] Side effects — в provider; hook читает context/state
- [ ] Boolean fields в options/return — `is*` / `has*` / `can*` (components rule § Props naming)
```

## Context hook template

```ts
export function useToasts(): UseToastsProps {
  const context = useContext(ToastsContext);
  if (!context) {
    throw new Error('useToasts must be used within <ToastsProvider>');
  }
  return context;
}
```

## Расположение

| Scope | Path |
| ----- | ---- |
| App-level | `src/hooks/{feature}/` |
| Component-local | `{feature}/.partials/hooks/` |

## Эталоны

- Context: `src/hooks/toasts/`
- Browser API: `src/hooks/storage-local/`
- Feature-local: `src/components/stepper/.partials/hooks/`
