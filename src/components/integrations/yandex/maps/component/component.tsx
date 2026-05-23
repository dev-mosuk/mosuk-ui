import type { YandexMapProps } from '@/components/integrations/yandex/maps/component/component.interface';
import { YandexMapSkeleton } from '@/components/integrations/yandex/maps/skeleton/component';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/components/integrations/yandex/maps/skeleton/default/scheme/layer/component';
import { YandexMapContext } from '@/providers/yandex/maps/context/context';
import React, { useContext } from 'react';

export function YandexMap({ ...rest }: YandexMapProps) {
  const context = useContext(YandexMapContext);

  if (!context) {
    throw new Error('YandexMap должен использоваться внутри YandexMap');
  }

  const { api, isLoading, error } = context;

  if (!api || isLoading || error) {
    return (
      <YandexMapSkeleton {...rest}>
        <YandexMapDefaultSchemeLayerSkeleton />
      </YandexMapSkeleton>
    );
  }

  const { YMap } = api;

  return <YMap {...rest}>{rest?.children}</YMap>;
}
