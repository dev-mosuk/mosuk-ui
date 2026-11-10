import { Input as Component } from '@/components/actions/input/component';
import type { InputProps } from '@/components/actions/input/component.interface';

export const Input = Object.assign(Component, {});

export namespace Input {
  export type Props = InputProps;
}

import { InputSkeleton as InputSkeletonComponent } from '@/components/actions/input/.partials/skeleton/component';
import type { InputSkeletonProps } from '@/components/actions/input/.partials/skeleton/component.interface';

export const InputSkeleton = Object.assign(InputSkeletonComponent, {});

export namespace InputSkeleton {
  export type Props = InputSkeletonProps;
}
