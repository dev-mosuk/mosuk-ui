---
name: services
description: >-
  Creates imperative singleton services in src/services/ (toasts, storage).
  Use for non-React API, registry, side-effect coordinators.
---

# services

Rule: `.cursor/rules/services.mdc`

## Checklist

```
- [ ] Файлы: service.ts, service.interface.ts, index.ts
- [ ] service.enums.ts — optional, export через namespace ENUMS
- [ ] Singleton: module-level getInstance или export const {name}Service
- [ ] Provider wiring: setter (manager) + cleanup на unmount
- [ ] Без React components и JSX
- [ ] Testable: inject dependencies через setter
```

## Структура

```
{feature}/
├── index.ts
├── service.ts
├── service.interface.ts
└── service.enums.ts          ← optional
```

## index.ts template

```ts
export { toastsService, type ToastEntry, type ToastsServiceProps };

export namespace ToastsService {
  export type Props = ToastsServiceProps;
  export const ENUMS = { Type: ToastType };
}
```

## Provider wiring

```ts
useEffect(() => {
  toastsService.manager(manager);
  return () => toastsService.manager(null);
}, [manager]);
```

## Эталоны

- Toast registry: `src/services/toasts/`
- localStorage: `src/services/storage/local/`
- cookie: `src/services/storage/cookie/`
