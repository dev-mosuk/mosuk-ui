import type {
  TabsOrientation,
  TabsVariant,
} from '@/components/tabs/.partials/enums/component.enums';
import { ComponentPropsWithoutRef, ElementType, Ref } from 'react';

export type TabsProps<C extends ElementType = 'div'> = {
  as?: C;
  ref?: Ref<any>;
  size?: number;
  variant?: TabsVariant | `${TabsVariant}`;
  orientation?: TabsOrientation | `${TabsOrientation}`;
  activateOnFocus?: boolean;
  loopFocus?: boolean;
  value?: any | null;
  defaultValue?: any | null;
  onChange?: (value: any) => void;
} & Omit<
  ComponentPropsWithoutRef<C>,
  | 'as'
  | 'ref'
  | 'value'
  | 'defaultValue'
  | 'onChange'
  | 'orientation'
  | 'size'
  | 'variant'
  | 'activateOnFocus'
  | 'loopFocus'
>;
