import type { Avatar } from '@/components/avatar';
import type { ReactNode } from 'react';

export type AvatarGroupCountProps = {
  size?: Avatar.Props['size'];
  variant?: Avatar.Props['variant'];
  className?: string;
  children?: ReactNode;
};
