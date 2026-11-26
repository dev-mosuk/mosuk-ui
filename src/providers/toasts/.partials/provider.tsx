import { ToastList } from '@/providers/toasts/.partials/components/list/component';
import { ToastsContext } from '@/providers/toasts/.partials/context/context';
import type { ToastsProviderProps } from '@/providers/toasts/.partials/provider.interface';
import styles from '@/providers/toasts/.partials/styles/styles.module.css';
import { toastsService } from '@/services/toasts';
import type { ToastsApi } from '@/services/toasts';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import React, { useEffect, useMemo } from 'react';

export function ToastsProvider({ children }: ToastsProviderProps) {
  const manager = BaseUiToast.createToastManager();

  useEffect(() => {
    toastsService.manager(manager);

    return () => {
      toastsService.manager(null);
    };
  }, [manager]);

  const toast = useMemo<ToastsApi>(
    () => ({
      default: toastsService.default.bind(toastsService) as ToastsApi['default'],
      primary: toastsService.primary.bind(toastsService) as ToastsApi['primary'],
      success: toastsService.success.bind(toastsService) as ToastsApi['success'],
      warning: toastsService.warning.bind(toastsService) as ToastsApi['warning'],
      danger: toastsService.danger.bind(toastsService) as ToastsApi['danger'],
      custom: (content) => toastsService.custom(content),
      close: (id) => toastsService.close(id),
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
    <ToastsContext.Provider value={value}>
      <BaseUiToast.Provider toastManager={manager}>
        {children}

        <BaseUiToast.Portal>
          <BaseUiToast.Viewport className={styles.toasts}>
            <ToastList />
          </BaseUiToast.Viewport>
        </BaseUiToast.Portal>
      </BaseUiToast.Provider>
    </ToastsContext.Provider>
  );
}
