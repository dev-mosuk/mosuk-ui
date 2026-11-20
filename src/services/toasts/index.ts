import { ToastActionVariant, ToastType } from './service.enums.js';
import type {
  ToastActionProps,
  ToastData,
  ToastEntry,
  ToastIndicator,
  ToastOptions,
  ToastsApi,
  ToastsServiceProps,
} from './service.interface.js';
import { toastsService } from './service.js';

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
