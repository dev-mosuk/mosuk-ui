import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import styles from '../component.module.css';
import { H6IconSkeletonProps } from './component.interface';

export function H6IconSKeleton({ ...rest }: H6IconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      className={classNames(
        'mosuk-h6-icon-skeleton',
        styles.icon,
        rest?.className
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
