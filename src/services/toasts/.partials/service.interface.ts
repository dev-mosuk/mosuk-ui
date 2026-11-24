import {
  ToastType,
  ToastVariant,
} from '@/services/toasts/.partials/service.enums';
import { ReactNode } from 'react';

export type ToastActionVariant =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'outline'
  | 'ghost';

export interface ToastAction {
  children?: ReactNode;
  className?: string;
  onPress?: () => void;
  variant?: ToastActionVariant;
}

export type ToastIcon = ReactNode;

export interface ToastOptions {
  subject?: ReactNode;
  comment?: ReactNode;
  icon?: ToastIcon;
  action?: ToastAction;
  variant?: ToastVariant | `${ToastVariant}`;
}

export interface ToastData {
  icon?: ToastIcon;
  action?: ToastAction;
  variant?: ToastVariant | `${ToastVariant}`;
  customContent?: ReactNode;
}

export interface ToastEntry {
  type: ToastType;
  subject?: ReactNode;
  comment?: ReactNode;
}

type ToastOptionsWithoutSubject = Omit<ToastOptions, 'subject'>;

export interface ToastsApi {
  default(options: ToastOptions): string | undefined;
  default(
    subject: ReactNode,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined;
  accent(options: ToastOptions): string | undefined;
  accent(
    subject: ReactNode,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined;
  success(options: ToastOptions): string | undefined;
  success(
    subject: ReactNode,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined;
  warning(options: ToastOptions): string | undefined;
  warning(
    subject: ReactNode,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined;
  danger(options: ToastOptions): string | undefined;
  danger(
    subject: ReactNode,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined;
  custom(content: ReactNode): string | undefined;
  close(id?: string): void;
}

export interface ToastsServiceProps extends ToastsApi {
  manager(manager: any): void;
}
