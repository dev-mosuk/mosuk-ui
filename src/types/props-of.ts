import type {
  ComponentPropsWithoutRef,
  HTMLAttributes,
  JSX,
  JSXElementConstructor,
} from 'react';

export type PropsOf<C> = C extends keyof JSX.IntrinsicElements
  ? ComponentPropsWithoutRef<C>
  : C extends JSXElementConstructor<infer P>
    ? P
    : HTMLAttributes<HTMLElement> & Record<string, unknown>;
