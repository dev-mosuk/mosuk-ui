import { Dropdown as Component } from '@/components/overlays/dropdown/.partials/components/component';
import { DropdownProps as ComponentProps } from '@/components/overlays/dropdown/.partials/components/component.interface';
import { DropdownPortal } from '@/components/overlays/dropdown/.partials/components/portal/component';
import { DropdownPortalProps } from '@/components/overlays/dropdown/.partials/components/portal/component.interface';
import { DropdownPortalDropdown } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/component';
import { DropdownPortalDropdownProps } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/component.interface';
import { DropdownPortalDropdownContentButton } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/content/button/component';
import { DropdownPortalDropdownContentButtonProps } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/content/button/component.interface';
import { DropdownPortalDropdownContent } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/content/component';
import { DropdownPortalDropdownContentProps } from '@/components/overlays/dropdown/.partials/components/portal/dropdown/content/component.interface';
import { DropdownTrigger } from '@/components/overlays/dropdown/.partials/components/trigger/component';
import { DropdownTriggerProps } from '@/components/overlays/dropdown/.partials/components/trigger/component.interface';

export const Dropdown = Object.assign(Component, {
  Trigger: DropdownTrigger,
  Portal: Object.assign(DropdownPortal, {
    Dropdown: Object.assign(DropdownPortalDropdown, {
      Content: Object.assign(DropdownPortalDropdownContent, {
        Button: DropdownPortalDropdownContentButton,
      }),
    }),
  }),
});

export namespace Dropdown {
  export type Props = ComponentProps;

  export namespace Trigger {
    export type Props = DropdownTriggerProps;
  }

  export namespace Portal {
    export type Props = DropdownPortalProps;

    export namespace Dropdown {
      export type Props = DropdownPortalDropdownProps;

      export namespace Content {
        export type Props = DropdownPortalDropdownContentProps;

        export namespace Button {
          export type Props = DropdownPortalDropdownContentButtonProps;
        }
      }
    }
  }
}
