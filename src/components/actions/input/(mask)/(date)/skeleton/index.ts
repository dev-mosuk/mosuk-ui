import { InputSkeleton as Component } from '../../../skeleton/component';
import { InputSkeletonProps as ComponentProps } from '../../../skeleton/component.interface';

const ChildComponent = (props: ComponentProps) =>
  Component(props);

export const InputMaskDateSkeleton = Object.assign(ChildComponent, {});

export namespace InputMaskDateSkeleton {
  export type Props = ComponentProps;
}
