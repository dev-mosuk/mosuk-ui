import {
  ToastActionVariant,
  ToastType,
} from '@/services/toasts/service.enums';
import { ComponentType, ReactNode, SVGProps } from 'react';

export interface ToastActionProps {
  children?: ReactNode;
  className?: string;
  onPress?: () => void;
  variant?: ToastActionVariant | `${ToastActionVariant}`;
}

export type ToastIndicator = ComponentType<SVGProps<SVGSVGElement>>;

export interface ToastOptions {
  description?: ReactNode;
  indicator?: ToastIndicator;
  actionProps?: ToastActionProps;
}

export interface ToastData {
  indicator?: ToastIndicator;
  actionProps?: ToastActionProps;
  customContent?: ReactNode;
}

export interface ToastEntry {
  type: ToastType;
  content: ReactNode;
}

export interface ToastsApi {
  default(content: ReactNode, options?: ToastOptions): string | undefined;
  accent(content: ReactNode, options?: ToastOptions): string | undefined;
  success(content: ReactNode, options?: ToastOptions): string | undefined;
  warning(content: ReactNode, options?: ToastOptions): string | undefined;
  danger(content: ReactNode, options?: ToastOptions): string | undefined;
  custom(content: ReactNode): string | undefined;
  close(id?: string): void;
}

export interface ToastsServiceProps extends ToastsApi {
  manager(manager: any): void;
}
