import { InputMaskPhone as ParentComponent } from '@/components/actions/input/(mask)/(phone)/component';
import {
  InputMaskPhoneProps,
  InputMaskPhoneProps as ParentComponentProps,
} from '@/components/actions/input/(mask)/(phone)/component.interface';

const Component = (props: ParentComponentProps) => ParentComponent(props);

export const InputMaskPhone = Object.assign(Component, {});

export namespace InputMaskPhone {
  export type Props = InputMaskPhoneProps;
}

import { InputSkeleton as SkeletonParentComponent } from '@/components/actions/input/.partials/skeleton/component';
import { InputSkeletonProps as SkeletonParentComponentProps } from '@/components/actions/input/.partials/skeleton/component.interface';

const SkeletonComponent = (props: SkeletonParentComponentProps) => SkeletonParentComponent(props);

export const InputMaskPhoneSkeleton = Object.assign(SkeletonComponent, {});

export namespace InputMaskPhoneSkeleton {
  export type Props = SkeletonParentComponentProps;
}
