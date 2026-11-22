import { AvatarGroup as Component } from '@/components/avatar-group/.partials/components/component';
import type { AvatarGroupProps } from '@/components/avatar-group/.partials/components/component.interface';
import { AvatarGroupCount } from '@/components/avatar-group/.partials/components/count/component';
import type { AvatarGroupCountProps } from '@/components/avatar-group/.partials/components/count/component.interface';
import { AvatarGroupOverlap } from '@/components/avatar-group/.partials/enums/component.enums';

export const AvatarGroup = Object.assign(Component, {
  Count: AvatarGroupCount,
  ENUMS: {
    Overlap: AvatarGroupOverlap,
  },
});

export namespace AvatarGroup {
  export type Props<C = 'nav'> = AvatarGroupProps<C>;

  export namespace Count {
    export type Props = AvatarGroupCountProps;
  }
}
