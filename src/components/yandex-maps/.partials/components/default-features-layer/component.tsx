import type { YandexMapDefaultFeaturesLayerProps } from '@/components/yandex-maps/.partials/components/default-features-layer/component.interface';
import { YandexMapContext } from '@/providers/yandex-maps/.partials/context/context';
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
