import { InputSkeleton as ParentComponent } from '@/components/actions/input/skeleton/component';
import { InputSkeletonProps as ParentComponentProps } from '@/components/actions/input/skeleton/component.interface';

const Component = (props: ParentComponentProps) => ParentComponent(props);

export const InputMaskPhoneSkeleton = Object.assign(Component, {});

export namespace InputMaskPhoneSkeleton {
  export type Props = ParentComponentProps;
}
