import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TypographyType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'body'
  | 'body-sm'
  | 'body-xs'
  | 'code';

export type TypographyAlign = 'start' | 'center' | 'end' | 'justify';

export type TypographyWeight = 'normal' | 'medium' | 'semibold' | 'bold';

export type TypographyProps<C extends ElementType = 'p'> = {
  as?: C;
  ref?: Ref<any>;
  type?: TypographyType;
  align?: TypographyAlign;
  muted?: boolean;
  weight?: TypographyWeight;
  truncate?: boolean;
} & Omit<ComponentPropsWithoutRef<C>, 'as' | 'ref' | 'type'>;
