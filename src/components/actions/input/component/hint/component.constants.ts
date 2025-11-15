import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';
import { InputHintType } from './component.enums';

export const InputHintTypeIcon = {  
  [InputHintType.INFO]: Info,
  [InputHintType.SUCCESS]: CircleCheck,
  [InputHintType.WARNING]: CircleMinus,
  [InputHintType.ERROR]: CircleAlert,
};