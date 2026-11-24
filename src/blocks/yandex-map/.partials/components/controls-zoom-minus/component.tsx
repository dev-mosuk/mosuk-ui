import type { YandexMapControlsZoomMinusProps } from '@/blocks/yandex-map/.partials/components/controls-zoom-minus/component.interface';
import { YMapZoomContext } from '@/blocks/yandex-map/.partials/providers/context/context';
import styles from '@/blocks/yandex-map/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Minus } from 'lucide-react';
import React, { useContext } from 'react';

export function YandexMapControlsZoomMinus(
  props: YandexMapControlsZoomMinusProps = {},
) {
  const context = useContext(YMapZoomContext);
  if (!context?.onZoomOut) {
    return null;
  }

  const { onZoomOut, zoom, min } = context;
  const isDisabled = zoom !== undefined && min !== undefined && zoom <= min;

  return (
    <button
      type="button"
      onClick={onZoomOut}
      disabled={isDisabled}
      data-disabled={isDisabled || undefined}
      aria-label="Уменьшить масштаб"
      className={classNames(
        'mosuk-yandex-map-zoom-minus',
        styles.zoomMinus,
        props.className,
      )}
    >
      <Minus aria-hidden strokeWidth={1.5} />
    </button>
  );
}
