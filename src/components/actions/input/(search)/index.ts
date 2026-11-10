import { InputSearch as Component } from '@/components/actions/input/(search)/component';
import { InputSearchProps as ComponentProps } from '@/components/actions/input/(search)/component.interface';

export const InputSearch = Object.assign(Component, {});

export namespace InputSearch {
  export type Props = ComponentProps;
}

import { InputSkeleton as SkeletonParentComponent } from '@/components/actions/input/.partials/skeleton/component';
import { InputSkeletonProps as SkeletonParentComponentProps } from '@/components/actions/input/.partials/skeleton/component.interface';

export const InputSearchSkeleton = Object.assign(SkeletonParentComponent, {});

export namespace InputSearchSkeleton {
  export type Props = SkeletonParentComponentProps;
}
