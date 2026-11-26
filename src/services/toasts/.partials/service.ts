import { ToastType } from '@/services/toasts/.partials/service.enums';
import type { ToastOptions } from '@/services/toasts/.partials/service.interface';
import { isValidElement, type ReactNode } from 'react';

type ToastOptionsWithoutSubject = Omit<ToastOptions, 'subject'>;

function isToastOptions(
  value: ReactNode | ToastOptions,
): value is ToastOptions {
  return (
    value !== null &&
    typeof value === 'object' &&
    !isValidElement(value) &&
    !Array.isArray(value)
  );
}

function resolveOptions(
  subjectOrOptions: ReactNode | ToastOptions,
  options?: ToastOptionsWithoutSubject,
): ToastOptions {
  if (options !== undefined) {
    return { ...options, subject: subjectOrOptions as ReactNode };
  }

  if (isToastOptions(subjectOrOptions)) {
    return subjectOrOptions;
  }

  return { subject: subjectOrOptions };
}

class ToastsService {
  private static instance: ToastsService;
  private managerRef: any = null;

  private constructor() {}

  static getInstance(): ToastsService {
    if (!ToastsService.instance) {
      ToastsService.instance = new ToastsService();
    }

    return ToastsService.instance;
  }

  manager(manager: any) {
    this.managerRef = manager;
  }

  private action(
    type: ToastType,
    subjectOrOptions: ReactNode | ToastOptions,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined {
    if (!this.managerRef) {
      console.error('toastsService must be used within <ToastsProvider>');

      return;
    }

    const resolved = resolveOptions(subjectOrOptions, options);

    return this.managerRef.add({
      type,
      title: resolved.subject as any,
      description: resolved.comment,
      data: {
        icon: resolved.icon,
        action: resolved.action,
        variant: resolved.variant,
      },
    });
  }

  default(
    subjectOrOptions: ReactNode | ToastOptions,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined {
    return this.action(ToastType.DEFAULT, subjectOrOptions, options);
  }

  primary(
    subjectOrOptions: ReactNode | ToastOptions,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined {
    return this.action(ToastType.PRIMARY, subjectOrOptions, options);
  }

  success(
    subjectOrOptions: ReactNode | ToastOptions,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined {
    return this.action(ToastType.SUCCESS, subjectOrOptions, options);
  }

  warning(
    subjectOrOptions: ReactNode | ToastOptions,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined {
    return this.action(ToastType.WARNING, subjectOrOptions, options);
  }

  danger(
    subjectOrOptions: ReactNode | ToastOptions,
    options?: ToastOptionsWithoutSubject,
  ): string | undefined {
    return this.action(ToastType.DANGER, subjectOrOptions, options);
  }

  custom(content: ReactNode): string | undefined {
    if (!this.managerRef) {
      console.error('toastsService must be used within <ToastsProvider>');

      return;
    }

    return this.managerRef.add({
      type: ToastType.CUSTOM,
      data: {
        customContent: content,
      },
    });
  }

  close(id?: string): void {
    if (!this.managerRef) {
      console.error('toastsService must be used within <ToastsProvider>');

      return;
    }

    this.managerRef.close(id);
  }
}

export const toastsService = ToastsService.getInstance();
