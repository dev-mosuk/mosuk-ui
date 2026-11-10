import { Icon as BaseIcon } from '@/components/actions/icon/component';
import type { IconProps } from '@/components/actions/icon/component.interface';

export const Icon = BaseIcon;

export namespace Icon {
  export type Props = IconProps;
}

import { IconSkeleton as BaseIconSkeleton } from '@/components/actions/icon/.partials/skeleton/component';
import type { IconSkeletonProps } from '@/components/actions/icon/.partials/skeleton/component.interface';

export const IconSkeleton = BaseIconSkeleton;

export namespace IconSkeleton {
  export type Props = IconSkeletonProps;
}
