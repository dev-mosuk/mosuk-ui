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

  private action(type: string, content: ReactNode): void {
    if (!this.toastManager) {
      console.error(
        'alertsService must be used within <AlertsProvider>'
      );
      return;
    }

    this.toastManager.add({
      type,
      title: content as any,
    });
  }


  info(content: ReactNode): void {
    this.action('info', content);
  }

  success(content: ReactNode): void {
    this.action('success', content);
  }

  warning(content: ReactNode): void {
    this.action('warning', content);
  }

  error(content: ReactNode): void {
    this.action('error', content);
  }

  custom(content: ReactNode): void {
    if (!this.toastManager) {
      console.error(
        'alertsService must be used within <AlertsProvider>'
      );
      return;
    }

    this.toastManager.add({
      type: 'custom',
      data: {
        customContent: content
      }
    });
  }

}

export const alertsService = AlertsService.getInstance();
