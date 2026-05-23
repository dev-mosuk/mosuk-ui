import { ButtonProps } from '@/components/actions/button/component/component.interface';
import { ElementType } from 'react';

export type SidebarCardButtonProps<C extends ElementType = 'button'> =
  ButtonProps<C> & {
    active?: boolean;
  };
