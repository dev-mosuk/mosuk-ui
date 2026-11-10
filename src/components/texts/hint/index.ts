import { HintTypeConstant } from '@/components/texts/hint/.partials/component.constants';
import { HintTypeEnum } from '@/components/texts/hint/.partials/component.enums';
import { Hint as BaseHint } from '@/components/texts/hint/.partials/components/component';
import { HintProps } from '@/components/texts/hint/.partials/components/component.interface';
import { HintIcon } from '@/components/texts/hint/.partials/components/icon/component';
import { HintIconProps } from '@/components/texts/hint/.partials/components/icon/component.interface';
import { HintText } from '@/components/texts/hint/.partials/components/text/component';
import { HintTextProps } from '@/components/texts/hint/.partials/components/text/component.interface';

export const Hint = Object.assign(BaseHint, {
  Icon: HintIcon,
  Text: HintText,
  Type: {
    ENUM: HintTypeEnum,
    CONSTANT: HintTypeConstant,
  },
});

export namespace Hint {
  export type Props = HintProps;

  export namespace Icon {
    export type Props = HintIconProps;
  }

  export namespace Text {
    export type Props = HintTextProps;
  }
}

import { HintSkeleton as BaseHintSkeleton } from '@/components/texts/hint/.partials/skeleton/component';
import { HintSkeletonProps } from '@/components/texts/hint/.partials/skeleton/component.interface';

export const HintSkeleton = BaseHintSkeleton;

export namespace HintSkeleton {
  export type Props = HintSkeletonProps;
}
