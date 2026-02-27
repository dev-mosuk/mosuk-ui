import React, { useContext } from 'react';
import { YandexMapContext } from '../../../../../providers/yandex/maps/context/context';
import { YandexMapSkeleton } from '../skeleton/component';
import { YandexMapDefaultSchemeLayerSkeleton } from '../skeleton/default/scheme/layer/component';
import type { YandexMapProps } from './component.interface';

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
