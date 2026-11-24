import type { YandexMapProps } from '@/blocks/yandex-map/.partials/components/component.interface';
import styles from '@/blocks/yandex-map/.partials/styles/component.module.css';
import { YandexMapContext } from '@/providers/yandex-map/.partials/context/context';
import classNames from 'classnames';
import React, { useContext } from 'react';

function mapClassName(className?: string) {
  return classNames(
    'mosuk-yandex-map',
    '@container/yandex-map',
    'group/yandex-map',
    styles.yandexMap,
    className,
  );
}

export function YandexMap({ className, ...rest }: YandexMapProps) {
  const context = useContext(YandexMapContext);

  if (!context) {
    throw new Error('YandexMap должен использоваться внутри YandexMap');
  }

  const { api, isLoading, error } = context;

  if (!api || isLoading || error) {
    return <div className={mapClassName(className)} />;
  }

  const { YMap } = api;

  return (
    <YMap className={mapClassName(className)} {...rest}>
      {rest?.children}
    </YMap>
  );
}
