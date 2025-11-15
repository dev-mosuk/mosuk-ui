import classNames from 'classnames';
import React from 'react';
import { IconSkeleton } from '../../../../actions/icon/skeleton/component';
import styles from '../component.module.css';
import { H3IconSkeletonProps } from './component.interface';

export function H3IconSKeleton({ ...rest }: H3IconSkeletonProps) {
  return (
    <IconSkeleton
      {...rest}
      className={classNames(
        'mosuk-h3-icon-skeleton',
        styles.icon,
        rest?.className
      )}
    >
      {rest?.children}
    </IconSkeleton>
  );
}
