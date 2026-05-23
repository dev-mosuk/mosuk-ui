import { AlertsContext } from '@/providers/alerts/context/context';
import { ToastList } from '@/providers/alerts/list/component';
import { AlertsProviderProps } from '@/providers/alerts/provider.interface';
import styles from '@/providers/alerts/provider.module.css';
import { alertsService } from '@/services/alerts/index';
import { Toast } from '@base-ui/react/toast';
import React, { ReactNode, useEffect } from 'react';

export function AlertsProvider({ children }: AlertsProviderProps) {
  const manager = Toast.createToastManager();

  useEffect(() => {
    alertsService.manager(manager);

    return () => {
      alertsService.manager(null);
    };
  }, [manager]);

  const info = (content: ReactNode) => {
    if (manager) {
      manager.add({ type: 'info', title: content as any });
    }
  };

  const success = (content: ReactNode) => {
    if (manager) {
      manager.add({ type: 'success', title: content as any });
    }
  };

  const warning = (content: ReactNode) => {
    if (manager) {
      manager.add({ type: 'warning', title: content as any });
    }
  };

  const error = (content: ReactNode) => {
    if (manager) {
      manager.add({ type: 'error', title: content as any });
    }
  };

  const custom = (content: ReactNode) => {
    if (manager) {
      manager.add({
        type: 'custom',
        data: {
          customContent: content,
        },
      });
    }
  };

  return (
    <AlertsContext.Provider
      value={{
        manager,

        info,
        success,
        warning,
        error,

        custom,
      }}
    >
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
