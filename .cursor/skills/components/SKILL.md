---
name: components
description: >-
  Orchestrates mosuk-ui component creation in src/components/. Links to category
  sub-skills. Use when building UI features.
---

# components

Rule: `.cursor/rules/components/rule.mdc`

## Checklist

```
- [ ] Pick category: actions|display|overlays|texts|layouts|collections|forms
- [ ] External SDK? → integrations skill, не components/
- [ ] Canonical: component/index.ts + .partials/ + skeleton/
- [ ] Styling: (styling) skill
- [ ] Export: (exports) skill
- [ ] Provider in feature? → providers/context skill
```

## Sub-skills

| Category | Skill |
| -------- | ----- |
| actions | [actions/SKILL.md](./actions/SKILL.md) |
| display | [display/SKILL.md](./display/SKILL.md) |
| overlays | [overlays/SKILL.md](./overlays/SKILL.md) |

Other categories → read matching `rules/components/{category}/rule.mdc`.

## Canonical tree

```
{feature}/
├── component/index.ts + .partials/{styles,components}/
└── skeleton/index.ts + .partials/components/
```

## Legacy

`button/` — flat, **не** копировать. Новый код → OTP.

## Эталоны

| Pattern | Path |
| ------- | ---- |
| Canonical | `src/components/actions/otp/` |
| Checkbox | `src/components/actions/checkbox/` |
| Toggle + provider | `src/components/actions/toggle/` |
| Drawer deep | `src/components/overlays/drawer/` |
| Form compound | `src/components/forms/fieldset/` |
