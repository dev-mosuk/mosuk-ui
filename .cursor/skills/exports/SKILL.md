---
name: exports
description: >-
  Creates index.ts public API with Object.assign compound and export namespace types.
  Use when adding or changing feature exports or package subpaths.
---

# exports

Rule: `.cursor/rules/exports.mdc`

## Checklist

```
- [ ] {feature}/index.ts — единственная public entry
- [ ] Object.assign(Component, { Sub: SubComponent })
- [ ] export namespace {Name} { export type Props; export namespace Sub { … } }
- [ ] Feature `{Name}Skeleton` не экспортируем
- [ ] index.ts подхватится в dist exports при следующем build (не запускать build в этом скилле)
```

## Template (InputOtp)

```ts
export const InputOtp = Object.assign(Component, { Input: InputOtpInput });

export namespace InputOtp {
  export type Props = InputOtpProps;
  export namespace Input {
    export type Props = InputOtpInputProps;
  }
}
```

Полный файл — `src/components/input-otp/index.ts`.

## Deep compound

Импорты из плоских `.partials/components/{part}/` и `{part}-{child}/` (`overview-popup/`). Nested `Object.assign` — `src/components/popover/index.ts`.

## Эталоны

- Simple compound: `src/components/input-otp/index.ts`
- Deep folders + `Object.assign`: `src/components/popover/index.ts`
- Provider: `src/providers/toasts/index.ts`
