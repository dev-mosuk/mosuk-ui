import { DropdownPaginationSort as BaseDropdownPaginationSort } from './component';
import { DropdownPaginationSortProps } from './component.interface';
import { DropdownPaginationSortDropdown } from './dropdown/component';
import { DropdownPaginationSortDropdownProps } from './dropdown/component.interface';
import { DropdownPaginationSortDropdownContentButton } from './dropdown/content/button/component';
import { DropdownPaginationSortDropdownContentButtonProps } from './dropdown/content/button/component.interface';
import { DropdownPaginationSortDropdownContent } from './dropdown/content/component';
import { DropdownPaginationSortDropdownContentProps } from './dropdown/content/component.interface';
import { DropdownPaginationSortTrigger } from './trigger/component';
import { DropdownPaginationSortTriggerProps } from './trigger/component.interface';

export const DropdownPaginationSort = Object.assign(BaseDropdownPaginationSort, {
  Trigger: DropdownPaginationSortTrigger,
  Dropdown: Object.assign(DropdownPaginationSortDropdown, {
    Content: Object.assign(DropdownPaginationSortDropdownContent, {
      Button: DropdownPaginationSortDropdownContentButton,
    }),
  }),
}) as typeof BaseDropdownPaginationSort & {
  Trigger: typeof DropdownPaginationSortTrigger;
  Dropdown: typeof DropdownPaginationSortDropdown & {
    Content: typeof DropdownPaginationSortDropdownContent & {
      Button: typeof DropdownPaginationSortDropdownContentButton;
    };
  };
};

export namespace DropdownPaginationSort {
  export type Props = DropdownPaginationSortProps;

  export namespace Trigger {
    export type Props = DropdownPaginationSortTriggerProps;
  }

  export namespace DropdownPaginationSortDropdown {
    export type Props = DropdownPaginationSortDropdownProps;

    export namespace DropdownPaginationSortDropdownContent {
      export type Props = DropdownPaginationSortDropdownContentProps;

      export namespace Button {
        export type Props = DropdownPaginationSortDropdownContentButtonProps;
      }
    }
  }
}
