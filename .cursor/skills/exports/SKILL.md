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
- [ ] {feature}/index.ts — единственная public entry (Component + Skeleton)
- [ ] Object.assign(Component, { Sub: SubComponent })
- [ ] export namespace {Name} { export type Props; export namespace Sub { … } }
- [ ] skeleton/index.ts mirrors compound tree
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

## Deep compound

Импорты из `.partials/components/…`; nested `Object.assign` — `src/components/overlays/drawer/index.ts`

## Эталоны

- Simple compound: `src/components/actions/otp/index.ts`
- Deep: `src/components/overlays/drawer/index.ts`
- Provider: `src/providers/alerts/index.ts`
