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
- [ ] Feature `{Name}Skeleton` не экспортируем (исключение: `YandexMap.Skeleton`)
- [ ] build: index.ts → dist export (tsconfig.build.ts walk)
```

## Template (OTP)

```ts
export const OTP = Object.assign(Component, { Input: OTPInput });

export namespace OTP {
  export type Props = OTPProps;
  export namespace Input {
    export type Props = OTPInputProps;
  }
}
```

Полный файл — `src/components/otp/index.ts`. Product skeleton — `src/components/yandex-maps/index.ts`.

## Deep compound

Импорты из плоских `.partials/components/{part}/` и `{part}-{child}/` (`overview-popup/`). Nested `Object.assign` — `src/components/dropdown/index.ts`.

## Эталоны

- Simple compound: `src/components/otp/index.ts`
- Deep folders + `Object.assign`: `src/components/dropdown/index.ts`
- Provider: `src/providers/toasts/index.ts`
