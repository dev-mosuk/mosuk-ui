import { InputMaskDate as Component } from '@/components/actions/input/(mask)/(date)/component';
import { InputMaskDateProps as ComponentProps } from '@/components/actions/input/(mask)/(date)/component.interface';

const ChildComponent = (props: ComponentProps) => Component(props);

export const InputMaskDate = Object.assign(ChildComponent, {});

export namespace InputMaskDate {
  export type Props = ComponentProps;
}

import { InputSkeleton as SkeletonComponent } from '@/components/actions/input/.partials/skeleton/component';
import { InputSkeletonProps as SkeletonComponentProps } from '@/components/actions/input/.partials/skeleton/component.interface';

const SkeletonChildComponent = (props: SkeletonComponentProps) => SkeletonComponent(props);

export const InputMaskDateSkeleton = Object.assign(SkeletonChildComponent, {});

export namespace InputMaskDateSkeleton {
  export type Props = SkeletonComponentProps;
}
