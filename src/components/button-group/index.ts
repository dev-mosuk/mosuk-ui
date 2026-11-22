import { ButtonGroup as Component } from '@/components/button-group/.partials/components/component';
import type { ButtonGroupProps } from '@/components/button-group/.partials/components/component.interface';
import { ButtonGroupSeparator } from '@/components/button-group/.partials/components/separator/component';
import type { ButtonGroupSeparatorProps } from '@/components/button-group/.partials/components/separator/component.interface';
import { ButtonGroupOrientation } from '@/components/button-group/.partials/enums/component.enums';

export const ButtonGroup = Object.assign(Component, {
  Separator: ButtonGroupSeparator,
  ENUMS: {
    Orientation: ButtonGroupOrientation,
  },
});

export namespace ButtonGroup {
  export type Props = ButtonGroupProps;

  export namespace Separator {
    export type Props = ButtonGroupSeparatorProps;
  }
}
