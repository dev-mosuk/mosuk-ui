import { ToastType } from '@/services/toasts/.partials/service.enums';
import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';

export const ToastTypeConstant = {
  [ToastType.DEFAULT]: {
    icon: Info,
  },
  [ToastType.ACCENT]: {
    icon: Info,
  },
  [ToastType.SUCCESS]: {
    icon: CircleCheck,
  },
  [ToastType.WARNING]: {
    icon: CircleMinus,
  },
  [ToastType.DANGER]: {
    icon: CircleAlert,
  },
};
