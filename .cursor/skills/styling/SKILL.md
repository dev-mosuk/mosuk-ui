---
name: styling
description: >-
  Applies CSS Layers, z-index, and mosuk-* classNames when writing or editing
  component styles. Use for *.module.css, index.css, styles/.
---

# styling

Rule: `.cursor/rules/styling.mdc` · README: [README.md](../../../README.md)

## Checklist

```
- [ ] @layer mosuk-ui { … }
- [ ] z-index: 0–99 content, 100–199 popover, 200+ modal
- [ ] CSS props order: overflow → position → layout → size → spacing → type → background → border → shadow → filters → interaction → motion (blank line between groups)
- [ ] background / border / shadow — отдельные блоки; filters ≠ interaction ≠ motion
- [ ] TSX: classNames('mosuk-{feature}', '@container/{feature}', 'group/{feature}', styles.root, rest?.className)
- [ ] group/@container на визуальном DOM-корне (Portal для drawer/dialog/dropdown; не headless Root)
- [ ] Feature skeleton в components не добавляем; shimmer — core/skeleton, карта — yandex maps skeleton CSS
```

## Эталон CSS

- Structure / layers: `src/components/actions/otp/.partials/styles/component.module.css`
- Property order: `src/components/collections/chat/.partials/styles/component.module.css` → `.composer`
