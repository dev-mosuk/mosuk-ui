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
- [ ] Logical @layer groups in module: Tokens | Component | Variant | Animation | Push — один блок на группу; не дробить Component по классам (.trigger/.content/.arrow)
- [ ] Variant hierarchy light/dark: primary заметнее secondary в обеих темах; dark surface primary=zinc-800, secondary=zinc-900 (не 900+800). Rule § «Variant hierarchy»
- [ ] z-index: 0–99 content, 100–199 popover, 200+ modal
- [ ] CSS tree: один host; states via nested &[data-*]/&:hover; children nested; no *With* / *Expanded module classes
- [ ] TSX: styles.host + data-* on DOM, not styles.hostWith…
- [ ] CSS props order: overflow → position → layout → size → spacing → type → background → border → shadow → filters → interaction → motion (blank line between groups)
- [ ] background / border / shadow — отдельные блоки; filters ≠ interaction ≠ motion
- [ ] font-size → var(--text-*); line-height → var(--leading-*) по схеме none/tight/snug/normal/relaxed/loose (не unitless); border-radius → var(--radius-*) / pill; не calc(var(--spacing)*N)
- [ ] TSX: classNames('mosuk-{feature}', '@container/{feature}', 'group/{feature}', styles.{feature}, rest?.className) — host = camelCase имени feature, не styles.root
- [ ] group/@container на визуальном DOM-корне (Portal для drawer/dialog/popover; не headless Root)
- [ ] Feature skeleton в components не добавляем; shimmer — core/skeleton, карта — yandex maps skeleton CSS
```

## Эталон CSS

- Logical @layer groups: `src/components/button/.partials/styles/component.module.css`, `src/components/popover/.partials/styles/component.module.css` (см. rule § «Логические группы»)
- Variant hierarchy (light/dark): rule § «Variant hierarchy»; эталоны `input/`, `segment/`
- Structure / layers: `src/components/input-otp/.partials/styles/component.module.css`
- Tree + property order: `src/components/chat/.partials/styles/component.module.css` → `.composer`
