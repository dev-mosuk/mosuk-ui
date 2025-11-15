import { CircleAlert, CircleCheck, CircleMinus, Info } from 'lucide-react';
import { TextareaHintType } from './component.enums';

export const TextareaHintTypeIcon = {  
  [TextareaHintType.INFO]: Info,
  [TextareaHintType.SUCCESS]: CircleCheck,
  [TextareaHintType.WARNING]: CircleMinus,
  [TextareaHintType.ERROR]: CircleAlert,
}; 