import React, { useContext } from 'react';
import { YandexMapContext } from '../../../../../../providers/yandex/maps/context/context';
import type { YandexMapFeatureProps } from './component.interface';

export function YandexMapFeature({ ...rest }: YandexMapFeatureProps) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) return null;

  const { YMapFeature } = context.api;

  return <YMapFeature {...rest}>{rest?.children}</YMapFeature>;
}
