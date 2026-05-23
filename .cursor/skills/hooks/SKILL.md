---
name: hooks
description: >-
  Creates React hooks in src/hooks/ or component .partials/hooks/.
  Use for context consumers, browser storage wrappers.
---

# hooks

Rule: `.cursor/rules/hooks/rule.mdc`

## Checklist

```
- [ ] Файлы: hook.ts, hook.interface.ts, index.ts
- [ ] Naming: use{Name} → Use{Name}Props
- [ ] Context hook: import context из providers/, guard throw обязателен
- [ ] index.ts: re-export hook + namespace use{Name} { export type Props }
- [ ] Без JSX (кроме rare render hooks — избегать)
- [ ] Без axios/SWR — это concern приложения-потребителя
- [ ] Side effects — в provider; hook читает context/state
```

## Context hook template

```ts
export function useAlerts(): UseAlertsProps {
  const context = useContext(AlertsContext);
  if (!context) {
    throw new Error('useAlerts must be used within <AlertsProvider>');
  }
  return context;
}
```

## Расположение

| Scope | Path |
| ----- | ---- |
| App-level | `src/hooks/{feature}/` |
| Component-local | `component/.partials/hooks/` |

## Эталоны

- Context: `src/hooks/alerts/`
- Browser API: `src/hooks/storage/local/`
- Feature-local: `src/components/actions/toggle/component/.partials/hooks/`
