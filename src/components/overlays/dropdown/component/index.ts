import { Dropdown as Component } from '@/components/overlays/dropdown/component/.partials/components/component';
import { DropdownProps as ComponentProps } from '@/components/overlays/dropdown/component/.partials/components/component.interface';
import { DropdownDropdown } from '@/components/overlays/dropdown/component/.partials/components/dropdown/component';
import { DropdownDropdownProps } from '@/components/overlays/dropdown/component/.partials/components/dropdown/component.interface';
import { DropdownDropdownContentButton } from '@/components/overlays/dropdown/component/.partials/components/dropdown/content/button/component';
import { DropdownDropdownContentButtonProps } from '@/components/overlays/dropdown/component/.partials/components/dropdown/content/button/component.interface';
import { DropdownDropdownContent } from '@/components/overlays/dropdown/component/.partials/components/dropdown/content/component';
import { DropdownDropdownContentProps } from '@/components/overlays/dropdown/component/.partials/components/dropdown/content/component.interface';
import { DropdownTrigger } from '@/components/overlays/dropdown/component/.partials/components/trigger/component';
import { DropdownTriggerProps } from '@/components/overlays/dropdown/component/.partials/components/trigger/component.interface';

export const Dropdown = Object.assign(Component, {
  Trigger: DropdownTrigger,
  Dropdown: Object.assign(DropdownDropdown, {
    Content: Object.assign(DropdownDropdownContent, {
      Button: DropdownDropdownContentButton,
    }),
  }),
});

export namespace Dropdown {
  export type Props = ComponentProps;

  export namespace Trigger {
    export type Props = DropdownTriggerProps;
  }

  export namespace Dropdown {
    export type Props = DropdownDropdownProps;

    export namespace Content {
      export type Props = DropdownDropdownContentProps;

      export namespace Button {
        export type Props = DropdownDropdownContentButtonProps;
      }
    }
  }
}
