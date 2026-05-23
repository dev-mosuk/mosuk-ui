---
name: components-display
description: >-
  Creates read-only UI in src/components/display/ (card, image, avatar, video).
  Use for static or mostly-static display with optional skeleton.
---

# components/display

Rule: `.cursor/rules/components/display/rule.mdc` · Orchestrator: [../SKILL.md](../SKILL.md)

## Checklist

```
- [ ] Предпочитать OTP-структуру: component/ + .partials/ + skeleton/
- [ ] Props: component.interface.ts
- [ ] Polymorphic: as?: ElementType, spread rest на корень
- [ ] CSS: @layer index-12 (или 22/32 для variant)
- [ ] z-index 0–99 (контент)
- [ ] Skeleton для async-bound display (images, cards с data)
- [ ] Skeleton CSS из component module
```

## Структура

```
{feature}/
├── component/index.ts + .partials/
└── skeleton/index.ts + .partials/
```

Простой display без sub-parts — flat допустим (legacy), но новый код → `.partials/`.

## Sub-parts

Крупный display → `.partials/components/{part}/` + compound в index.ts.

## Эталоны

Смотреть `src/components/display/`; новый код — паттерн OTP/checkbox.
