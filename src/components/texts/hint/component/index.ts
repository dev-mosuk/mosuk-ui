import { Hint as BaseHint } from './component';
import { HintTypeConstant } from './component.constants';
import { HintAsEnum, HintTypeEnum } from './component.enums';
import { HintProps } from './component.interface';

export const Hint = Object.assign(BaseHint, {  
  ENUMS: {
    As: HintAsEnum,
    Type: HintTypeEnum
  },
  CONSTANTS: {
    Type: HintTypeConstant
  }
});

export namespace Hint {
  export type Props = HintProps;
}
