import { ReactNode } from 'react';
import { ButtonProps } from '../../component/component.interface';

export interface ButtonDeleteProps extends ButtonProps {
  alert?: {
    timeout?: number;
    message?: string;
  };
  onDelete?: () => void;

  className?: string;
  children: ReactNode;
}