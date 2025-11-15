import { CardFlipBack } from './back/component';
import type { CardFlipBackProps } from './back/component.interface';
import { CardFlip as BaseCardFlip } from './component';
import type { CardFlipProps } from './component.interface';
import { CardFlipFront } from './front/component';
import type { CardFlipFrontProps } from './front/component.interface';

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
