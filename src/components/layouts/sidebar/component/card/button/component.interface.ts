import { ElementType } from 'react';
import { ButtonProps } from '../../../../../actions/button/component/component.interface';

export type SidebarCardButtonProps<C extends ElementType = 'button'> = ButtonProps<C> & {
  active?: boolean;
};
