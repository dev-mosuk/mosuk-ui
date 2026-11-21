import { Dropdown as Component } from '@/components/dropdown/.partials/components/component';
import { DropdownProps as ComponentProps } from '@/components/dropdown/.partials/components/component.interface';
import { DropdownClose } from '@/components/dropdown/.partials/components/close/component';
import { DropdownCloseProps } from '@/components/dropdown/.partials/components/close/component.interface';
import { DropdownDropdown } from '@/components/dropdown/.partials/components/dropdown/component';
import { DropdownDropdownProps } from '@/components/dropdown/.partials/components/dropdown/component.interface';
import { DropdownDropdownContentButton } from '@/components/dropdown/.partials/components/dropdown/content/button/component';
import { DropdownDropdownContentButtonProps } from '@/components/dropdown/.partials/components/dropdown/content/button/component.interface';
import { DropdownDropdownContent } from '@/components/dropdown/.partials/components/dropdown/content/component';
import { DropdownDropdownContentProps } from '@/components/dropdown/.partials/components/dropdown/content/component.interface';
import { DropdownOpen } from '@/components/dropdown/.partials/components/open/component';
import { DropdownOpenProps } from '@/components/dropdown/.partials/components/open/component.interface';

export const Dropdown = Object.assign(Component, {
  Open: DropdownOpen,
  Close: DropdownClose,
  Dropdown: Object.assign(DropdownDropdown, {
    Content: Object.assign(DropdownDropdownContent, {
      Button: DropdownDropdownContentButton,
    }),
  }),
});

export namespace Dropdown {
  export type Props = ComponentProps;

  export namespace Open {
    export type Props = DropdownOpenProps;
  }

  export namespace Close {
    export type Props = DropdownCloseProps;
  }

  export namespace Dropdown {
    export type Props = DropdownDropdownProps;

    export namespace Content {
      export type Props = DropdownDropdownContentProps;

      export namespace Button {
        export type Props<C = 'button'> = DropdownDropdownContentButtonProps<C>;
      }
    }
  }
}
