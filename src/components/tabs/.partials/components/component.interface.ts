import type {
  TabsOrientation,
  TabsVariant,
} from '@/components/tabs/.partials/enums/component.enums';
import { CSSProperties, ReactNode, Ref } from 'react';

import type { PropsOf } from '@/types/props-of';

export type TabsProps<C = 'div'> = {
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
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
} & Omit<
  PropsOf<C>,
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
  | 'className'
  | 'style'
  | 'children'
>;
