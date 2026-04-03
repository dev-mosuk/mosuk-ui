import { Hint as BaseHint } from './component';
import { HintTypeConstant } from './component.constants';
import { HintTypeEnum } from './component.enums';
import { HintProps } from './component.interface';

export const Hint = Object.assign(BaseHint, {
  Type: {
    ENUM: HintTypeEnum,
    CONSTANT: HintTypeConstant,
  },
});

export namespace Hint {
  export type Props = HintProps;
}
