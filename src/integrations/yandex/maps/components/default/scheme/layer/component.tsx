import type { YandexMapDefaultSchemeLayerProps } from '@/integrations/yandex/maps/components/default/scheme/layer/component.interface';
import { YandexMapContext } from '@/integrations/yandex/maps/provider/context/context';
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
