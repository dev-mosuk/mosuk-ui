import {
  Dropdown as BaseDropdown,
  DropdownDropdown as BaseDropdownDropdown,
  DropdownDropdownContent as BaseDropdownDropdownContent,
  DropdownTrigger as BaseDropdownTrigger,
} from '@/components/overlays/dropdown/component/component';
import type {
  DropdownDropdownContentProps,
  DropdownDropdownProps,
  DropdownProps,
  DropdownTriggerProps,
} from '@/components/overlays/dropdown/component/component.interface';

export const Dropdown = Object.assign(BaseDropdown, {
  Trigger: BaseDropdownTrigger,
  Dropdown: Object.assign(BaseDropdownDropdown, {
    Content: BaseDropdownDropdownContent,
  }),
}) as typeof BaseDropdown & {
  Trigger: typeof BaseDropdownTrigger;
  Dropdown: typeof BaseDropdownDropdown & {
    Content: typeof BaseDropdownDropdownContent;
  };
};

export namespace Dropdown {
  export type Props = DropdownProps;

  export namespace Trigger {
    export type Props = DropdownTriggerProps;
  }

  export namespace Dropdown {
    export type Props = DropdownDropdownProps;

    export namespace Content {
      export type Props = DropdownDropdownContentProps;
    }
  }
}
