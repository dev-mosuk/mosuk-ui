---
name: integrations
description: >-
  Creates external SDK features in src/integrations/ (Yandex Maps, Metrika,
  T-Bank). Use when adding vendor UI, SDK providers, or product submodules.
---

# integrations

Rule: `.cursor/rules/integrations.mdc`

## Checklist

```
- [ ] Vendor с продуктом? → integrations/{vendor}/{product}/{layer}/
- [ ] Vendor без продукта? → integrations/{vendor}/{layer}/
- [ ] Слои как в src: components/, provider/, hooks/, utilities/
- [ ] Provider: 4-file pattern (см. providers skill)
- [ ] Component: component/ + skeleton/, index-15
- [ ] Export: index.ts + namespace
```

## Куда класть

| Что | Пример |
| --- | ------ |
| Yandex Maps UI + SDK | `src/integrations/yandex/maps/{components,provider}/` |
| Yandex Metrika SDK | `src/integrations/yandex/metrika/provider/` |
| T-Bank UI + SDK | `src/integrations/tbank/{components/terminal,provider}/` |

## Эталоны

| Pattern | Path |
| ------- | ---- |
| Product + UI | `src/integrations/yandex/maps/` |
| Product, provider only | `src/integrations/yandex/metrika/` |
| Vendor, no product | `src/integrations/tbank/` |
