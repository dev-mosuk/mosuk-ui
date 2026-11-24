import { ToastType, ToastVariant } from '@/services/toasts/.partials/service.enums';
import type {
  ToastAction,
  ToastData,
  ToastEntry,
  ToastIcon,
  ToastOptions,
  ToastsApi,
  ToastsServiceProps,
} from '@/services/toasts/.partials/service.interface';
import { toastsService } from '@/services/toasts/.partials/service';

export {
  toastsService,
  type ToastAction,
  type ToastData,
  type ToastEntry,
  type ToastIcon,
  type ToastOptions,
  type ToastsApi,
  type ToastsServiceProps,
};

export namespace ToastsService {
  export type Props = ToastsServiceProps;

  export const ENUMS = {
    Type: ToastType,
    Variant: ToastVariant,
  };
}
