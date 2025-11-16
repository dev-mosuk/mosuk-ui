import { PaginationSort as BasePaginationSort } from './component';
import { PaginationSortProps } from './component.interface';
import { PaginationSortDropdown } from './dropdown/component';
import { PaginationSortDropdownProps } from './dropdown/component.interface';
import { PaginationSortDropdownContentButton } from './dropdown/content/button/component';
import { PaginationSortDropdownContentButtonProps } from './dropdown/content/button/component.interface';
import { PaginationSortDropdownContent } from './dropdown/content/component';
import { PaginationSortDropdownContentProps } from './dropdown/content/component.interface';
import { PaginationSortTrigger } from './trigger/component';
import { PaginationSortTriggerProps } from './trigger/component.interface';

export const PaginationSort = Object.assign(BasePaginationSort, {
  Trigger: PaginationSortTrigger,
  Dropdown: Object.assign(PaginationSortDropdown, {
    Content: Object.assign(PaginationSortDropdownContent, {
      Button: PaginationSortDropdownContentButton,
    }),
  }),
}) as typeof BasePaginationSort & {
  Trigger: typeof PaginationSortTrigger;
  Dropdown: typeof PaginationSortDropdown & {
    Content: typeof PaginationSortDropdownContent & {
      Button: typeof PaginationSortDropdownContentButton;
    };
  };
};

export namespace PaginationSort {
  export type Props = PaginationSortProps;

  export namespace Trigger {
    export type Props = PaginationSortTriggerProps;
  }

  export namespace PaginationSortDropdown {
    export type Props = PaginationSortDropdownProps;

    export namespace PaginationSortDropdownContent {
      export type Props = PaginationSortDropdownContentProps;

      export namespace Button {
        export type Props = PaginationSortDropdownContentButtonProps;
      }
    }
  }
}
