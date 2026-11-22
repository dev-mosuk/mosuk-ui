import { ToastList } from '@/providers/toasts/.partials/components/list/component';
import { ToastsContext } from '@/providers/toasts/.partials/context/context';
import type { ToastsProviderProps } from '@/providers/toasts/.partials/provider.interface';
import styles from '@/providers/toasts/.partials/styles/styles.module.css';
import { toastsService } from '@/services/toasts';
import type { ToastsApi } from '@/services/toasts/.partials/service.interface';
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
      default: (content, options) => toastsService.default(content, options),
      accent: (content, options) => toastsService.accent(content, options),
      success: (content, options) => toastsService.success(content, options),
      warning: (content, options) => toastsService.warning(content, options),
      danger: (content, options) => toastsService.danger(content, options),
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
