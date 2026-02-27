import React, { useContext } from 'react';
import { YandexMapContext } from '../../../../../../../../providers/yandex/maps/context/context';
import type { YandexMapDefaultSchemeLayerProps } from './component.interface';

export function YandexMapDefaultSchemeLayer(
  props: YandexMapDefaultSchemeLayerProps,
) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) return null;

  const { YMapDefaultSchemeLayer } = context.api;

  return <YMapDefaultSchemeLayer {...props} />;
}
