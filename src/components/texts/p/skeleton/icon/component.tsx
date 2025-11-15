import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import styles from '../component.module.css';
import { PIconSkeletonProps } from './component.interface';

export function PIconSKeleton({ ...rest }: PIconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      className={classNames(
        'mosuk-p-icon-skeleton',
        styles.icon,
        rest?.className
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
