import type { ToastData } from '@/services/toasts';
import type { Toast as BaseUiToast } from '@base-ui/react/toast';
import type { ReactNode } from 'react';

export type ToastItemToast = BaseUiToast.Root.Props['toast'] & {
  type?: string;
  title?: ReactNode;
  description?: ReactNode;
  data?: ToastData;
};

export interface ToastItemProps {
  toast: ToastItemToast;
}
