import type { YandexMapDefaultFeaturesLayerProps } from '@/integrations/yandex/maps/components/component/default/features/layer/component.interface';
import { YandexMapContext } from '@/integrations/yandex/maps/provider/context/context';
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
