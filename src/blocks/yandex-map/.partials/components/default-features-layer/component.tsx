import type { YandexMapDefaultFeaturesLayerProps } from '@/blocks/yandex-map/.partials/components/default-features-layer/component.interface';
import { YandexMapContext } from '@/providers/yandex-map/.partials/context/context';
import React, { useContext } from 'react';

export function YandexMapDefaultFeaturesLayer(
  props: YandexMapDefaultFeaturesLayerProps,
) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) {
    return null;
  }

  const { YMapDefaultFeaturesLayer } = context.api;

  return <YMapDefaultFeaturesLayer {...props} />;
}
