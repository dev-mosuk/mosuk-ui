import {
  Dropdown as BaseDropdown,
  DropdownDropdown as BaseDropdownDropdown,
  DropdownDropdownContent as BaseDropdownDropdownContent,
  DropdownTrigger as BaseDropdownTrigger,
} from './component';
import type {
  DropdownDropdownContentProps,
  DropdownDropdownProps,
  DropdownProps,
  DropdownTriggerProps
} from './component.interface';

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
