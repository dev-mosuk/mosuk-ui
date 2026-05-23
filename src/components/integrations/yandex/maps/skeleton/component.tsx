import { Skeleton } from '@/components/display/skeleton/component/component';
import type { YandexMapSkeletonProps } from '@/components/integrations/yandex/maps/skeleton/component.interface';
import styles from '@/components/integrations/yandex/maps/skeleton/component.module.css';
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
