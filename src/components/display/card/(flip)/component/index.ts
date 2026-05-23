import { CardFlipBack } from '@/components/display/card/(flip)/component/back/component';
import type { CardFlipBackProps } from '@/components/display/card/(flip)/component/back/component.interface';
import { CardFlip as BaseCardFlip } from '@/components/display/card/(flip)/component/component';
import type { CardFlipProps } from '@/components/display/card/(flip)/component/component.interface';
import { CardFlipFront } from '@/components/display/card/(flip)/component/front/component';
import type { CardFlipFrontProps } from '@/components/display/card/(flip)/component/front/component.interface';

export const CardFlip = Object.assign(BaseCardFlip, {
  Front: CardFlipFront,
  Back: CardFlipBack,
});

export namespace CardFlip {
  export type Props = CardFlipProps;

  export namespace Front {
    export type Props = CardFlipFrontProps;
  }

  export namespace Back {
    export type Props = CardFlipBackProps;
  }
}
