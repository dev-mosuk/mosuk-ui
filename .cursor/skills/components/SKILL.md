---
name: components
description: >-
  Creates mosuk-ui UI in src/components/: actions (OTP, checkbox, toggle),
  display (card, image, avatar), overlays (drawer, dialog, dropdown), texts,
  layouts, collections, navigation (breadcrumbs, stepper), forms. Use when
  building components, skeletons, or deep compound on @base-ui/react.
---

# components

Rule: `.cursor/rules/components.mdc`

## Checklist

```
- [ ] Pick category: actions|display|overlays|texts|layouts|collections|navigation|forms|containers
- [ ] External SDK? → integrations skill, не components/
- [ ] Canonical: {feature}/index.ts + .partials/ (+ .partials/skeleton/)
- [ ] Styling: styling skill
- [ ] Export: exports skill
- [ ] Provider in feature? → providers skill
```

## Canonical tree

```
{feature}/
├── index.ts
└── .partials/{styles,components,providers?,skeleton?}/
```

Deep overlay: nested `.partials/components/{portal,viewport,…}` зеркалит compound.

## Legacy

`button/` — flat, **не** копировать. Новый код → OTP.

## actions

index-11 (21/31 для variant)

```
{feature}/
├── component/
│   ├── index.ts
│   └── .partials/
│       ├── styles/component.module.css    ← @layer mosuk-ui { @layer index-11 { … } }
│       └── components/
│           ├── component.tsx              ← classNames('mosuk-{feature}', styles.root, …)
│           ├── component.interface.ts     ← NOT component.props.ts
│           └── {sub}/component.tsx
└── skeleton/
    ├── index.ts                           ← Object.assign + namespace {Name}Skeleton
    └── .partials/components/              ← import styles from ../../../component/.partials/styles/
```

```
- [ ] Структура OTP: index.ts + .partials/ (+ .partials/skeleton/)
- [ ] Props: component.interface.ts (не .props.ts)
- [ ] index.ts: Object.assign + export namespace
- [ ] CSS: index-11 (или 21/31 для variant)
- [ ] Skeleton переиспользует CSS module component
- [ ] Sub-parts: {Name}.{Sub} в compound
```

Если sub-parts делят state: `component/.partials/providers/` + hooks/ → [providers/SKILL.md](../providers/SKILL.md)

| Pattern | Path |
| ------- | ---- |
| Primary | `src/components/actions/otp/` |
| Compound + indicator | `src/components/actions/checkbox/` |
| Provider + hooks | `src/components/actions/toggle/` |
| Legacy (не копировать) | `src/components/actions/button/` |

## display

index-12 (22/32 для variant), z-index 0–99

```
- [ ] Предпочитать OTP-структуру: index.ts + .partials/ (+ skeleton)
- [ ] Props: component.interface.ts
- [ ] Polymorphic: as?: ElementType, spread rest на корень
- [ ] CSS: @layer index-12 (или 22/32 для variant)
- [ ] Skeleton для async-bound display (images, cards с data)
- [ ] Skeleton CSS из component module
```

Простой display без sub-parts — flat допустим (legacy), но новый код → `.partials/`. Крупный display → `.partials/components/{part}/` + compound в index.ts.

Эталоны: `src/components/display/`; новый код — паттерн OTP/checkbox.

## overlays

index-17 (27/37 для variant)

```
- [ ] Canonical: index.ts + .partials/{styles,components} (+ providers если нужен context)
- [ ] z-index: 100–199 popover/dropdown, 200+ dialog/drawer
- [ ] CSS: @layer index-17 (или 27/37 для variant) в .partials/styles/
- [ ] Props: component.interface.ts на каждом sub-part
- [ ] @base-ui primitives — не дублировать focus trap / portal / aria
- [ ] index.ts: вложенный Object.assign для deep compound
- [ ] export namespace зеркалит compound tree
```

```
drawer/
├── index.ts
└── .partials/
    ├── styles/component.module.css
    ├── providers/                    ← если нужен feature-local context
    └── components/
        ├── component.tsx
        ├── open/component.tsx
        └── portal/viewport/popup/content/component.tsx
```

```ts
export const Drawer = Object.assign(Component, {
  Open: DrawerOpen,
  Portal: Object.assign(DrawerPortal, {
    Viewport: Object.assign(DrawerPortalViewport, {
      Popup: Object.assign(DrawerPortalViewportPopup, {
        Content: DrawerPortalViewportPopupContent,
      }),
    }),
  }),
});
```

Эталон: `src/components/overlays/drawer/` — deep compound + namespace

## Эталоны

| Pattern | Path |
| ------- | ---- |
| Canonical | `src/components/actions/otp/` |
| Checkbox | `src/components/actions/checkbox/` |
| Toggle + provider | `src/components/actions/toggle/` |
| Drawer deep (`.partials/` + nested compound) | `src/components/overlays/drawer/` |
| Form compound | `src/components/forms/fieldset/` |
