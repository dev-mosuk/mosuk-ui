import type { ButtonGroupOrientation } from '@/components/button-group/.partials/enums/component.enums';
import type { Button } from '@/components/button';
import type { HTMLAttributes, ReactNode } from 'react';

export type ButtonGroupProps = {
  variant?: Button.Props['variant'];
  size?: Button.Props['size'];
  width?: Button.Props['width'];
  isDisabled?: boolean;
  orientation?: ButtonGroupOrientation | `${ButtonGroupOrientation}`;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;
