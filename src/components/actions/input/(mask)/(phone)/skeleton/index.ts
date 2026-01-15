import { InputSkeleton as ParentComponent } from '../../../skeleton/component';
import { InputSkeletonProps as ParentComponentProps } from '../../../skeleton/component.interface';

const Component = (props: ParentComponentProps) =>
  ParentComponent(props);

export const InputMaskPhoneSkeleton = Object.assign(Component, {});

export namespace InputMaskPhoneSkeleton {
  export type Props = ParentComponentProps;
}
