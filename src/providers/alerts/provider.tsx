import { Toast } from '@base-ui/react/toast';
import React, { ReactNode, useEffect } from 'react';
import { alertsService } from '../../services/alerts';
import { AlertsContext } from './context/context';
import { ToastList } from './list/component';
import { AlertsProviderProps } from './provider.interface';
import styles from './provider.module.css';

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
