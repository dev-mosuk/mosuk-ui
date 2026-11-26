import type {
  ButtonActionsAlign,
  ButtonActionsOrientation } from '@/components/button-actions/.partials/enums/component.enums';
import type { PropsOf } from '@/types/props-of';
import type {
  CSSProperties,
  ElementType,
  ReactNode,
  Ref } from 'react';

export type ButtonActionsProps<C = 'nav'> = {
  as?: C;
  ref?: Ref<any>;
  orientation?: ButtonActionsOrientation | `${ButtonActionsOrientation}`;
  align?: ButtonActionsAlign | `${ButtonActionsAlign}`;
  isDisabled?: boolean;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
  'as' | 'ref' | 'className' | 'style' | 'children' | 'align'
>;
