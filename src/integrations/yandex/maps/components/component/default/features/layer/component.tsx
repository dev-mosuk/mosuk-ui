import type { YandexMapDefaultFeaturesLayerProps } from '@/components/integrations/yandex/maps/component/default/features/layer/component.interface';
import { YandexMapContext } from '@/providers/yandex/maps/context/context';
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
