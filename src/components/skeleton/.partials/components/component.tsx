import { SkeletonProps } from '@/components/skeleton/.partials/components/component.interface';
import {
  SKELETON_DEFAULT_ANIMATION,
  SKELETON_DEFAULT_VARIANT,
} from '@/components/skeleton/.partials/constants/component.constants';
import styles from '@/components/skeleton/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Skeleton<C extends ElementType = 'div'>({
  as,
  animation = SKELETON_DEFAULT_ANIMATION,
  variant = SKELETON_DEFAULT_VARIANT,
  ...rest
}: SkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      data-animation={animation}
      data-variant={variant}
      className={classNames(
        'mosuk-skeleton',
        styles.skeleton,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
