import { Button as BaseButton } from '@/components/actions/button/component';
import type { ButtonProps } from '@/components/actions/button/component.interface';

export const Button = BaseButton;

export namespace Button {
  export type Props = ButtonProps;
}

import { ButtonSkeleton as BaseButtonSkeleton } from '@/components/actions/button/.partials/skeleton/component';
import type { ButtonSkeletonProps } from '@/components/actions/button/.partials/skeleton/component.interface';

export const ButtonSkeleton = BaseButtonSkeleton;

export namespace ButtonSkeleton {
  export type Props = ButtonSkeletonProps;
}
