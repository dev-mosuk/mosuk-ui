import { Switch as Component } from '@/components/actions/switch/component';
import type { SwitchProps } from '@/components/actions/switch/component.interface';

export const Switch = Object.assign(Component, {});

export namespace Switch {
  export type Props = SwitchProps;
}

import { SwitchSkeleton as SkeletonComponent } from '@/components/actions/switch/.partials/skeleton/component';
import type { SwitchSkeletonProps } from '@/components/actions/switch/.partials/skeleton/component.interface';

export const SwitchSkeleton = Object.assign(SkeletonComponent, {});

export namespace SwitchSkeleton {
  export type Props = SwitchSkeletonProps;
}
