import type { YandexMapControlsZoomPlusProps } from '@/blocks/yandex-map/.partials/components/controls-zoom-plus/component.interface';
import { YMapZoomContext } from '@/blocks/yandex-map/.partials/providers/context/context';
import styles from '@/blocks/yandex-map/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Plus } from 'lucide-react';
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
      type="button"
      onClick={onZoomIn}
      disabled={isDisabled}
      data-disabled={isDisabled || undefined}
      aria-label="Увеличить масштаб"
      className={classNames(
        'mosuk-yandex-map-zoom-plus',
        styles.zoomPlus,
        props.className,
      )}
    >
      <Plus aria-hidden strokeWidth={1.5} />
    </button>
  );
}
