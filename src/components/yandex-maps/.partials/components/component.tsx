import type { YandexMapProps } from '@/components/yandex-maps/.partials/components/component.interface';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/components/yandex-maps/.partials/components/skeleton-default-scheme-layer/component';
import { YandexMapSkeleton } from '@/components/yandex-maps/.partials/components/skeleton/component';
import { YandexMapContext } from '@/providers/yandex-maps/.partials/context/context';
import React, { useContext } from 'react';

export function YandexMap({ ...rest }: YandexMapProps) {
  const context = useContext(YandexMapContext);

  if (!context) {
    throw new Error('YandexMap должен использоваться внутри YandexMap');
  }

  const { api, isLoading, error } = context;

  if (!api || isLoading || error) {
    return (
      <YandexMapSkeleton {...rest}>
        <YandexMapDefaultSchemeLayerSkeleton />
      </YandexMapSkeleton>
    );
  }

  const { YMap } = api;

  return <YMap {...rest}>{rest?.children}</YMap>;
}
