import type { YandexMapDefaultSchemeLayerProps } from '@/components/integrations/yandex/maps/component/default/scheme/layer/component.interface';
import { YandexMapContext } from '@/providers/yandex/maps/context/context';
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
