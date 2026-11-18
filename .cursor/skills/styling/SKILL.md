---
name: styling
description: >-
  Applies CSS Layers, index-N, z-index, and mosuk-* classNames when writing or editing
  component styles. Use for *.module.css, index.css, styles/.
---

# styling

Rule: `.cursor/rules/styling.mdc` · README: [README.md](../../../README.md)

## Checklist

```
- [ ] @layer mosuk-ui { @layer index-{N} { … } }
- [ ] index-N matches category (11=actions, 17=overlays, …)
- [ ] z-index: 0–99 content, 100–199 popover, 200+ modal
- [ ] TSX: classNames('mosuk-{feature}', '@container/{feature}', 'group/{feature}', styles.root, rest?.className)
- [ ] group/@container на визуальном DOM-корне (Portal для drawer/dialog/dropdown; не headless Root)
- [ ] Feature skeleton в components не добавляем; shimmer — core/skeleton, карта — yandex maps skeleton CSS
```

## index-N quick ref

| N | Category |
| --- | -------- |
| 10 | texts |
| 11 | actions (21/31 variants) |
| 12 | display |
| 13 | containers |
| 14 | collections |
| 15 | integrations |
| 16 | layouts |
| 17 | overlays (27/37 variants) |
| 18 | navigation |

## Эталон CSS

`src/components/actions/otp/.partials/styles/component.module.css`
