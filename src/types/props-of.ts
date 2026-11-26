import type {
  HTMLAttributes,
  JSX,
  JSXElementConstructor,
} from 'react';

export type PropsOf<C> = C extends keyof JSX.IntrinsicElements
  ? JSX.IntrinsicElements[C]
  : C extends JSXElementConstructor<infer P>
    ? P
    : HTMLAttributes<HTMLElement> & Record<string, unknown>;