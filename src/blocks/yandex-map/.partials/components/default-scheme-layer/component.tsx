import type { YandexMapDefaultSchemeLayerProps } from '@/blocks/yandex-map/.partials/components/default-scheme-layer/component.interface';
import { YandexMapContext } from '@/providers/yandex-map/.partials/context/context';
import React, { useContext } from 'react';

export function YandexMapDefaultSchemeLayer(
  props: YandexMapDefaultSchemeLayerProps,
) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) {
    return null;
  }

  const { YMapDefaultSchemeLayer } = context.api;

  return <YMapDefaultSchemeLayer {...props} />;
}
