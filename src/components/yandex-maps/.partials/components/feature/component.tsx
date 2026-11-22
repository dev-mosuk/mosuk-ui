import type { YandexMapFeatureProps } from '@/components/yandex-maps/.partials/components/feature/component.interface';
import { YandexMapContext } from '@/providers/yandex-maps/.partials/context/context';
import React, { useContext } from 'react';

export function YandexMapFeature({ ...rest }: YandexMapFeatureProps) {
  const context = useContext(YandexMapContext);

  if (!context || !context.api) {
    return null;
  }

  const { YMapFeature } = context.api;

  return <YMapFeature {...rest}>{rest?.children}</YMapFeature>;
}
