import React, { useContext } from 'react';
import { YandexMapsContext } from '../../../../../../../providers/yandex/maps/context/context';
import type { YandexMapsMapDefaultSchemeLayerProps } from './component.interface';

export function YandexMapsMapDefaultSchemeLayer(props: YandexMapsMapDefaultSchemeLayerProps) {
  const context = useContext(YandexMapsContext);
  
  if (!context || !context.api) return null;

  const { YMapDefaultSchemeLayer } = context.api;

  return <YMapDefaultSchemeLayer {...props} />;
}
