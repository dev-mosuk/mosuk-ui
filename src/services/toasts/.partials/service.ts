import { ToastType } from '@/services/toasts/.partials/service.enums';
import type { ToastOptions } from '@/services/toasts/.partials/service.interface';
import type { ReactNode } from 'react';

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
    content: ReactNode,
    options?: ToastOptions,
  ): string | undefined {
    if (!this.managerRef) {
      console.error('toastsService must be used within <ToastsProvider>');

      return;
    }

    return this.managerRef.add({
      type,
      title: content as any,
      description: options?.description,
      data: {
        indicator: options?.indicator,
        actionProps: options?.actionProps,
      },
    });
  }

  default(content: ReactNode, options?: ToastOptions): string | undefined {
    return this.action(ToastType.DEFAULT, content, options);
  }

  accent(content: ReactNode, options?: ToastOptions): string | undefined {
    return this.action(ToastType.ACCENT, content, options);
  }

  success(content: ReactNode, options?: ToastOptions): string | undefined {
    return this.action(ToastType.SUCCESS, content, options);
  }

  warning(content: ReactNode, options?: ToastOptions): string | undefined {
    return this.action(ToastType.WARNING, content, options);
  }

  danger(content: ReactNode, options?: ToastOptions): string | undefined {
    return this.action(ToastType.DANGER, content, options);
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
