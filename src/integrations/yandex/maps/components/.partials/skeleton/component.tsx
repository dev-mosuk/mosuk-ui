import { Skeleton } from '@/components/core/skeleton';
import type { YandexMapSkeletonProps } from '@/integrations/yandex/maps/components/.partials/skeleton/component.interface';
import styles from '@/integrations/yandex/maps/components/.partials/skeleton/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
