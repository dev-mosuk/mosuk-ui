import type { HTMLAttributes, ReactNode } from 'react';

export interface ListBoxItemProps extends Omit<
  HTMLAttributes<HTMLLIElement>,
  'id'
> {
  id: string;
  textValue?: string;
  size?: number;
  isDisabled?: boolean;
  isActive?: boolean;
  children?: ReactNode;
}
