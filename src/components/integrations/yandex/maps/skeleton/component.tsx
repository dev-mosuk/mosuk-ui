import classNames from 'classnames';
import React from 'react';
import type { YandexMapsSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function YandexMapsSkeleton({ ...rest }: YandexMapsSkeletonProps) {
  return (
    <div {...rest} className={classNames(styles.yandexMaps, rest?.className)}>
      {rest?.children}
    </div>
  );
}