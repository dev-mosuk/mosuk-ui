import { InputSkeleton as Component } from '@/components/actions/input/skeleton/component';
import { InputSkeletonProps as ComponentProps } from '@/components/actions/input/skeleton/component.interface';

const ChildComponent = (props: ComponentProps) => Component(props);

export const InputMaskDateSkeleton = Object.assign(ChildComponent, {});

export namespace InputMaskDateSkeleton {
  export type Props = ComponentProps;
}
