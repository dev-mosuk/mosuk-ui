import type { Avatar } from '@/components/avatar';
import type { AvatarGroupOverlap } from '@/components/avatar-group/.partials/enums/component.enums';
import type { PropsOf } from '@/types/props-of';
import type { ReactNode, Ref } from 'react';

type AvatarGroupOwnProps<C> = {
  as?: C;
  ref?: Ref<any>;
  size?: Avatar.Props['size'];
  variant?: Avatar.Props['variant'];
  max?: number;
  isGrid?: boolean;
  overlap?: AvatarGroupOverlap | `${AvatarGroupOverlap}`;
  className?: string;
  children?: ReactNode;
};

export type AvatarGroupProps<C = 'nav'> = AvatarGroupOwnProps<C> &
  Omit<PropsOf<C>, 'as' | 'ref' | 'className' | 'children' | 'color'>;
