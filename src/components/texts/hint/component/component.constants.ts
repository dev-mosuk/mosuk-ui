import { HintTypeEnum } from '@/components/texts/hint/component/component.enums';
import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';

export const HintTypeConstant = {
  [HintTypeEnum.INFO]: {
    icon: Info,
  },
  [HintTypeEnum.SUCCESS]: {
    icon: CircleCheck,
  },
  [HintTypeEnum.WARNING]: {
    icon: CircleMinus,
  },
  [HintTypeEnum.ERROR]: {
    icon: CircleAlert,
  },
};
