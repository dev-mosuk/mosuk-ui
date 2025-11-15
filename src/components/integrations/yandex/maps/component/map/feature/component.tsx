import React, { useContext } from 'react';
import { YandexMapsContext } from '../../../../../../../providers/yandex/maps/context/context';
import type { YandexMapsMapFeatureProps } from './component.interface';

export function YandexMapsMapFeature({ ...rest }: YandexMapsMapFeatureProps) {
  const context = useContext(YandexMapsContext);

  if (!context || !context.api) return null;

  const { YMapFeature } = context.api;

  return <YMapFeature {...rest}>{rest?.children}</YMapFeature>;
}
