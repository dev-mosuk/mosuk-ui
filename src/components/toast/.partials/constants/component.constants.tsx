import { ToastsService } from '@/services/toasts';
import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';
import React from 'react';

const ToastType = ToastsService.ENUMS.Type;
const ToastVariant = ToastsService.ENUMS.Variant;

export const TOAST_DEFAULT_VARIANT = ToastVariant.Secondary;
export const TOAST_ROOT_DEFAULT_IS_OPEN = false;
export const TOAST_ROOT_DEFAULT_IS_DISABLED = false;

export const ToastTypeConstant = {
  [ToastType.DEFAULT]: {
    icon: <Info strokeWidth={1.25} />,
  },
  [ToastType.PRIMARY]: {
    icon: <Info strokeWidth={1.25} />,
  },
  [ToastType.SUCCESS]: {
    icon: <CircleCheck strokeWidth={1.25} />,
  },
  [ToastType.WARNING]: {
    icon: <CircleMinus strokeWidth={1.25} />,
  },
  [ToastType.DANGER]: {
    icon: <CircleAlert strokeWidth={1.25} />,
  },
};
