import type { Button } from '@/components/button';
import type { ButtonGroupOrientation } from '@/components/button-group/.partials/enums/component.enums';
import type { HTMLAttributes, ReactNode } from 'react';

export type ButtonGroupProps = {
  size?: Button.Props['size'];
  variant?: Button.Props['variant'];
  isDetached?: boolean;
  orientation?: ButtonGroupOrientation | `${ButtonGroupOrientation}`;
  isDisabled?: boolean;
  className?: string;
  children?: ReactNode;
} & Omit<HTMLAttributes<HTMLDivElement>, 'children' | 'className'>;
