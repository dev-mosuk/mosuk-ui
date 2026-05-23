---
name: components-overlays
description: >-
  Creates floating UI in src/components/overlays/ (drawer, dialog, dropdown).
  Use for modals, popovers, deep compound on @base-ui/react.
---

# components/overlays

Rule: `.cursor/rules/components/overlays/rule.mdc` · Orchestrator: [../SKILL.md](../SKILL.md)

## Checklist

```
- [ ] z-index: 100–199 popover/dropdown, 200+ dialog/drawer
- [ ] CSS: @layer index-17 (или 27/37 для variant)
- [ ] Props: component.interface.ts на каждом sub-part
- [ ] @base-ui primitives — не дублировать focus trap / portal / aria
- [ ] index.ts: вложенный Object.assign для deep compound
- [ ] export namespace зеркалит compound tree
```

## Deep compound (drawer)

```
drawer/component/
├── index.ts
├── component.tsx
├── open/component.tsx
└── portal/viewport/popup/content/component.tsx
```

Допустимо **без** `.partials/` для глубокого compound. Новые actions/display — OTP.

## Template index.ts

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

## Эталон

`src/components/overlays/drawer/` — deep compound + namespace
