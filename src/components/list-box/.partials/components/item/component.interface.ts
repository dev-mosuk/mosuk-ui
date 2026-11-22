import type { ListBoxItemVariant } from '@/components/list-box/.partials/enums/component.enums';
import type { HTMLAttributes, ReactNode } from 'react';

export interface ListBoxItemProps extends Omit<
  HTMLAttributes<HTMLLIElement>,
  'id'
> {
  id: string;
  textValue?: string;
  size?: number;
  variant?: ListBoxItemVariant | `${ListBoxItemVariant}`;
  isDisabled?: boolean;
  children?: ReactNode;
}
