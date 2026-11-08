import { AlertType } from '@/services/alerts/service.enums';
import { AlertOptions } from '@/services/alerts/service.interface';
import { ReactNode } from 'react';

class AlertsService {
  private static instance: AlertsService;
  private toastManager: any = null;

  private constructor() {}

  static getInstance(): AlertsService {
    if (!AlertsService.instance) {
      AlertsService.instance = new AlertsService();
    }

    return AlertsService.instance;
  }

  manager(manager: any) {
    this.toastManager = manager;
  }

  private action(
    type: AlertType,
    content: ReactNode,
    options?: AlertOptions,
  ): string | undefined {
    if (!this.toastManager) {
      console.error('alertsService must be used within <AlertsProvider>');

      return;
    }

    return this.toastManager.add({
      type,
      title: content as any,
      description: options?.description,
      data: {
        indicator: options?.indicator,
        actionProps: options?.actionProps,
      },
    });
  }

  default(content: ReactNode, options?: AlertOptions): string | undefined {
    return this.action(AlertType.DEFAULT, content, options);
  }

  accent(content: ReactNode, options?: AlertOptions): string | undefined {
    return this.action(AlertType.ACCENT, content, options);
  }

  success(content: ReactNode, options?: AlertOptions): string | undefined {
    return this.action(AlertType.SUCCESS, content, options);
  }

  warning(content: ReactNode, options?: AlertOptions): string | undefined {
    return this.action(AlertType.WARNING, content, options);
  }

  danger(content: ReactNode, options?: AlertOptions): string | undefined {
    return this.action(AlertType.DANGER, content, options);
  }

  custom(content: ReactNode): string | undefined {
    if (!this.toastManager) {
      console.error('alertsService must be used within <AlertsProvider>');

      return;
    }

    return this.toastManager.add({
      type: AlertType.CUSTOM,
      data: {
        customContent: content,
      },
    });
  }

  close(id?: string): void {
    if (!this.toastManager) {
      console.error('alertsService must be used within <AlertsProvider>');

      return;
    }

    this.toastManager.close(id);
  }
}

export const alertsService = AlertsService.getInstance();
