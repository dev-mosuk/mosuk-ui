import { AlertsContext } from '@/providers/alerts/.partials/context/context';
import { ToastList } from '@/providers/alerts/.partials/components/list/component';
import { AlertsProviderProps } from '@/providers/alerts/.partials/provider.interface';
import styles from '@/providers/alerts/.partials/styles/provider.module.css';
import { alertsService } from '@/services/alerts/index';
import { ToastApi } from '@/services/alerts/service.interface';
import { Toast } from '@base-ui/react/toast';
import React, { useEffect, useMemo } from 'react';

export function AlertsProvider({ children }: AlertsProviderProps) {
  const manager = Toast.createToastManager();

  useEffect(() => {
    alertsService.manager(manager);

    return () => {
      alertsService.manager(null);
    };
  }, [manager]);

  const toast = useMemo<ToastApi>(
    () => ({
      default: (content, options) => alertsService.default(content, options),
      accent: (content, options) => alertsService.accent(content, options),
      success: (content, options) => alertsService.success(content, options),
      warning: (content, options) => alertsService.warning(content, options),
      danger: (content, options) => alertsService.danger(content, options),
      custom: (content) => alertsService.custom(content),
      close: (id) => alertsService.close(id),
    }),
    [],
  );

  const value = useMemo(
    () => ({
      manager,
      toast,
    }),
    [manager, toast],
  );

  return (
    <AlertsContext.Provider value={value}>
      <Toast.Provider toastManager={manager}>
        {children}

        <Toast.Portal>
          <Toast.Viewport className={styles.alerts}>
            <ToastList />
          </Toast.Viewport>
        </Toast.Portal>
      </Toast.Provider>
    </AlertsContext.Provider>
  );
}
