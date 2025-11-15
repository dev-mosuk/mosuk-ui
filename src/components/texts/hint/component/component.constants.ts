import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';
import { HintTypeEnum } from './component.enums';

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
