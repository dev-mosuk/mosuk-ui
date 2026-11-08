import { AlertType } from '@/services/alerts/service.enums';
import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';

export const AlertTypeConstant = {
  [AlertType.DEFAULT]: {
    icon: Info,
  },
  [AlertType.ACCENT]: {
    icon: Info,
  },
  [AlertType.SUCCESS]: {
    icon: CircleCheck,
  },
  [AlertType.WARNING]: {
    icon: CircleMinus,
  },
  [AlertType.DANGER]: {
    icon: CircleAlert,
  },
};
