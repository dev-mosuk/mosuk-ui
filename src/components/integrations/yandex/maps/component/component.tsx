import classNames from 'classnames';
import React, { useContext, useRef } from 'react';
import { YandexMapsContext } from '../../../../../providers/yandex/maps/context/context';
import { YandexMapsSkeleton } from '../skeleton/component';
import { YandexMapsMapSkeleton } from '../skeleton/map/component';
import type { YandexMapsProps } from './component.interface';
import styles from './component.module.css';

export function YandexMaps({ ...rest }: YandexMapsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const context = useContext(YandexMapsContext);

  if (!context) {
    throw new Error('YandexMaps должен использоваться внутри YandexMapsProvider');
  }

  const { api, isLoading, error } = context;

  if (!api || isLoading || error) {
    return (
      <YandexMapsSkeleton {...rest}>
        <YandexMapsMapSkeleton />
      </YandexMapsSkeleton>
    );
  }
 
  return (
    <div ref={containerRef} className={classNames(styles.yandexMaps, rest?.className)}>
      {rest?.children}
    </div>
  );
}
