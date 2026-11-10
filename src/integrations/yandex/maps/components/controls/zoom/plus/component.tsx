import type { YandexMapControlsZoomPlusProps } from '@/integrations/yandex/maps/components/controls/zoom/plus/component.interface';
import { YMapZoomContext } from '@/integrations/yandex/maps/components/zoom/context';
import React, { useContext } from 'react';

export function YandexMapControlsZoomPlus(
  props: YandexMapControlsZoomPlusProps = {},
) {
  const context = useContext(YMapZoomContext);
  if (!context?.onZoomIn) {
    return null;
  }

  const { onZoomIn, zoom, max } = context;
  const isDisabled = zoom !== undefined && max !== undefined && zoom >= max;

  return (
    <button
      type='button'
      onClick={onZoomIn}
      disabled={isDisabled}
      className={props.className}
      aria-label='Увеличить масштаб'
    />
  );
}
