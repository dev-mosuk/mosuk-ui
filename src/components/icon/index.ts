import { Icon as Component } from '@/components/icon/.partials/components/component';
import type { IconProps } from '@/components/icon/.partials/components/component.interface';
import {
  IconPress,
  IconVariant,
} from '@/components/icon/.partials/enums/component.enums';

export const Icon = Object.assign(Component, {
  ENUMS: {
    Variant: IconVariant,
    Press: IconPress,
  },
});

export namespace Icon {
  export type Props<C = 'button'> = IconProps<C>;
}
