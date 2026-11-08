---
name: services
description: >-
  Creates imperative singleton services in src/services/ (alerts, storage).
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
export { alertsService, type Alert, type AlertsServiceProps };

export namespace AlertsService {
  export type Props = AlertsServiceProps;
  export const ENUMS = { Type: AlertType };
}
```

## Provider wiring

```ts
useEffect(() => {
  alertsService.manager(manager);
  return () => alertsService.manager(null);
}, [manager]);
```

## Эталоны

- Toast registry: `src/services/alerts/`
- localStorage: `src/services/storage/local/`
- cookie: `src/services/storage/cookie/`
