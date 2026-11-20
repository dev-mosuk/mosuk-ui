import { ToastList } from './components/list/component.js';
import { ToastsContext } from './context/context.js';
import { ToastsProviderProps } from './provider.interface.js';
import styles from './styles/styles.module.css';
import { toastsService } from '../../../services/toasts/index.js';
import { ToastsApi } from '../../../services/toasts/service.interface.js';
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
