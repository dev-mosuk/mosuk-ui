import classNames from 'classnames';
import { Locate } from 'lucide-react';
import React from 'react';
import { Skeleton } from '../../../../../display/skeleton/component';
import styles from '../component.module.css';
import type { YandexMapsMapSkeletonProps } from './component.interface';

export function YandexMapsMapSkeleton({ ...rest }: YandexMapsMapSkeletonProps) {
  return (
    <Skeleton
      {...rest}
      title="Загрузка карты..."
      className={classNames(styles.yandexMapsMap, rest?.className)}
    >
      <Locate />
    </Skeleton>
  );
}
