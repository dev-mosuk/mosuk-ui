import React, { useContext } from 'react';
import { YandexMapContext } from '../../../../../../../../providers/yandex/maps/context/context';
import type { YandexMapDefaultFeaturesLayerProps } from './component.interface';

export function YandexMapDefaultFeaturesLayer(
  props: YandexMapDefaultFeaturesLayerProps,
) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) return null;

  const { YMapDefaultFeaturesLayer } = context.api;

  return <YMapDefaultFeaturesLayer {...props} />;
}
