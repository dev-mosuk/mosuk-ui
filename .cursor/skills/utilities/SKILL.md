---
name: utilities
description: >-
  Creates pure formatters in src/utilities/ (phone, price, email, date).
  Use for formatting, parsing, normalization without React or DOM.
---

# utilities

Rule: `.cursor/rules/utilities.mdc`

## Checklist

```
- [ ] Pure: same input → same output, без side effects
- [ ] Файл: {action}/util.ts (e.g. format/util.ts)
- [ ] index.ts: named export или namespace object ({ phone: { format } })
- [ ] Без import components, providers, hooks
- [ ] Без DOM — browser access в hooks/ или services/
- [ ] date-fns / mosuk-utilities — prefer over reinventing
```

## Структура

```
{domain}/
├── index.ts
└── {action}/
    └── util.ts
```

## Export patterns

```ts
// Named re-export
export { format } from './format/util';

// Namespace object (existing pattern)
export const phone = { format };
```

## Эталоны

- `src/utilities/phone/`
- `src/utilities/price/`
- `src/utilities/date/` — multiple util.ts
