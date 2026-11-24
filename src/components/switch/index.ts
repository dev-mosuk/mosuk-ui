import { Switch as Component } from '@/components/switch/.partials/components/component';
import type { SwitchProps } from '@/components/switch/.partials/components/component.interface';
import { SwitchThumb } from '@/components/switch/.partials/components/thumb/component';
import type { SwitchThumbProps } from '@/components/switch/.partials/components/thumb/component.interface';
import { SwitchVariant } from '@/components/switch/.partials/enums/component.enums';

export const Switch = Object.assign(Component, {
  Thumb: SwitchThumb,
  ENUMS: {
    Variant: SwitchVariant,
  },
});

export namespace Switch {
  export type Props = SwitchProps;

  export namespace Thumb {
    export type Props = SwitchThumbProps;
  }
}
