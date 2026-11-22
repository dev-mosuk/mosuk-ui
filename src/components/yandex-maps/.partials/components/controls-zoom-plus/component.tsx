import type { YandexMapControlsZoomPlusProps } from '@/components/yandex-maps/.partials/components/controls-zoom-plus/component.interface';
import { YMapZoomContext } from '@/components/yandex-maps/.partials/providers/context/context';
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
