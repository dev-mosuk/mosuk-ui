import { ToastActionVariant, ToastType } from '@/services/toasts/.partials/service.enums';
import type {
  ToastActionProps,
  ToastData,
  ToastEntry,
  ToastIndicator,
  ToastOptions,
  ToastsApi,
  ToastsServiceProps,
} from '@/services/toasts/.partials/service.interface';
import { toastsService } from '@/services/toasts/.partials/service';

export {
  toastsService,
  type ToastActionProps,
  type ToastData,
  type ToastEntry,
  type ToastIndicator,
  type ToastOptions,
  type ToastsApi,
  type ToastsServiceProps,
};

export namespace ToastsService {
  export type Props = ToastsServiceProps;

  export const ENUMS = {
    Type: ToastType,
    ActionVariant: ToastActionVariant,
  };
}
