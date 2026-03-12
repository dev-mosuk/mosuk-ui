import classNames from 'classnames';
import React, { ElementType } from 'react';
import { Skeleton } from '../../../../display/skeleton/component/component';
import type { YandexMapSkeletonProps } from './component.interface';
import styles from './component.module.css';

export function YandexMapSkeleton<C extends ElementType = 'div'>({
  as,
  ...rest
}: YandexMapSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Skeleton
      {...rest}
      as={Component}
      className={classNames(
        'mosuk-yandex-map',
        styles.yandex_map,
        rest?.className,
      )}
    >
      {rest?.children}
    </Skeleton>
  );
}
