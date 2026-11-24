import type { JSX, JSXElementConstructor } from 'react';

export type PropsOf<C> = C extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[C]
  : C extends JSXElementConstructor<infer P>
    ? P
    : Record<string, unknown>;
