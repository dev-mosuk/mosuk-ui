import { CellSliderSkeletonProps } from '@/components/actions/slider/(cell)/.partials/skeleton/components/component.interface';
import styles from '@/components/actions/slider/(cell)/.partials/styles/component.module.css';
import { Skeleton } from '@/components/core/skeleton/component';
import classNames from 'classnames';
import React from 'react';

export function CellSliderSkeleton({ ...rest }: CellSliderSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      className={classNames(
        'mosuk-cell-slider-skeleton',
        styles.skeleton,
        rest?.className,
      )}
    />
  );
}
