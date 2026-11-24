---
name: integrations
description: >-
  Creates vendor SDK features as flat hyphenated folders in components/
  and providers/ (Yandex Maps, Metrika, T-Bank). Not a separate integrations/ tree.
---

# integrations (vendor features)

Rule: `.cursor/rules/integrations.mdc`

## Checklist

```
- [ ] Vendor UI → components/{hyphenated-feature}/ (index.ts + .partials/)
- [ ] SDK script/context → providers/{hyphenated-feature}/ (index.ts + .partials/)
- [ ] Нет src/integrations/ — только обычные слои
- [ ] Provider: 4-file pattern в .partials/ (см. providers skill)
- [ ] Component: как input-otp/drawer; @layer mosuk-ui
- [ ] Export: index.ts + namespace; package subpath в src/package.json
```

## Куда класть

| Что | Пример |
| --- | ------ |
| Yandex Maps UI | `src/blocks/yandex-map/` |
| Yandex Maps SDK | `src/providers/yandex-map/` |
| Yandex Metrika SDK | `src/providers/yandex-metrika/` |
| T-Bank Terminal UI | `src/components/tbank-terminal/` |
| T-Bank SDK | `src/providers/tbank/` |

## Эталоны

| Pattern | Path |
| ------- | ---- |
| UI + compound | `src/blocks/yandex-map/` |
| Provider only | `src/providers/yandex-metrika/` |
| UI + provider pair | `src/components/tbank-terminal/` + `src/providers/tbank/` |
