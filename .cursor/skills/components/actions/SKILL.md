---
name: components-actions
description: >-
  Creates interactive controls in src/components/actions/ (OTP, checkbox, toggle).
  Use when building buttons, inputs, toggles with canonical .partials/ structure.
---

# components/actions

Rule: `.cursor/rules/components/actions/rule.mdc` · Orchestrator: [../SKILL.md](../SKILL.md)

## OTP checklist

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

## Checklist

```
- [ ] Структура OTP: component/ + skeleton/ + .partials/
- [ ] Props: component.interface.ts (не .props.ts)
- [ ] index.ts: Object.assign + export namespace
- [ ] CSS: index-11 (или 21/31 для variant)
- [ ] Skeleton переиспользует CSS module component
- [ ] Sub-parts: {Name}.{Sub} в compound
```

## Provider in partials (toggle)

Если sub-parts делят state:

```
component/.partials/providers/ + hooks/
```

→ [providers/SKILL.md](../../providers/SKILL.md)

## Эталоны

| Pattern | Path |
| ------- | ---- |
| Primary | `src/components/actions/otp/` |
| Compound + indicator | `src/components/actions/checkbox/` |
| Provider + hooks | `src/components/actions/toggle/` |
| Legacy (не копировать) | `src/components/actions/button/` |
