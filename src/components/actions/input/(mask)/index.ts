import { InputMask as Component } from '@/components/actions/input/(mask)/component';
import { InputMaskProps as ComponentProps } from '@/components/actions/input/(mask)/component.interface';

export const InputMask = Object.assign(Component, {});

export namespace InputMask {
  export type Props = ComponentProps;
}

import { InputSkeleton as ParentInputSkeleton } from '@/components/actions/input/.partials/skeleton/component';
import { InputSkeletonProps as SkeletonParentComponentProps } from '@/components/actions/input/.partials/skeleton/component.interface';

export const InputMaskSkeleton = Object.assign(ParentInputSkeleton, {});

export namespace InputMaskSkeleton {
  export type Props = SkeletonParentComponentProps;
}
