import { HTMLAttributes } from 'react';
import { HintAsEnum, HintTypeEnum } from './component.enums';

export interface HintProps extends HTMLAttributes<HTMLParagraphElement> {
  as?: HintAsEnum;
  type?: HintTypeEnum;
}
