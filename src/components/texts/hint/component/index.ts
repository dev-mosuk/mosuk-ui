import { Hint as BaseHint } from '@/components/texts/hint/component/component';
import { HintTypeConstant } from '@/components/texts/hint/component/component.constants';
import { HintTypeEnum } from '@/components/texts/hint/component/component.enums';
import { HintProps } from '@/components/texts/hint/component/component.interface';

export const Hint = Object.assign(BaseHint, {
  Type: {
    ENUM: HintTypeEnum,
    CONSTANT: HintTypeConstant,
  },
});

export namespace Hint {
  export type Props = HintProps;
}
