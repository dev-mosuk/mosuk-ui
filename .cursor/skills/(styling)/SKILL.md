---
name: styling
description: >-
  Applies CSS Layers, index-N, z-index, and mosuk-* classNames when writing or editing
  component styles. Use for *.module.css, index.css, styles/.
---

# (styling)

Rule: `.cursor/rules/(styling)/rule.mdc` · README: [README.md](../../README.md)

## Checklist

```
- [ ] @layer mosuk-ui { @layer index-{N} { … } }
- [ ] index-N matches category (11=actions, 17=overlays, …)
- [ ] z-index: 0–99 content, 100–199 popover, 200+ modal
- [ ] TSX: classNames('mosuk-{feature}', styles.root, rest?.className)
- [ ] Skeleton imports component CSS module when possible
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

## Эталон CSS

`src/components/actions/otp/component/.partials/styles/component.module.css`
