import React, { useContext } from 'react';
import { YandexMapsContext } from '../../../../../../../providers/yandex/maps/context/context';
import type { YandexMapsMapDefaultFeaturesLayerProps } from './component.interface';

export function YandexMapsMapDefaultFeaturesLayer(props: YandexMapsMapDefaultFeaturesLayerProps) {
  const context = useContext(YandexMapsContext);
  
  if (!context || !context.api) return null;

  const { YMapDefaultFeaturesLayer } = context.api;

  return <YMapDefaultFeaturesLayer {...props} />;
}
