import styles from '@/components/integrations/yandex/maps/component/component.module.css';
import type { YandexMapControlsZoomProps } from '@/components/integrations/yandex/maps/component/controls/zoom/component.interface';
import { YandexMapControlsZoomMinus } from '@/components/integrations/yandex/maps/component/controls/zoom/minus/component';
import { YandexMapControlsZoomPlus } from '@/components/integrations/yandex/maps/component/controls/zoom/plus/component';
import { YandexMapContext } from '@/providers/yandex/maps/context/context';
import React, { useContext } from 'react';

export function YandexMapControlsZoom(props: YandexMapControlsZoomProps = {}) {
  const context = useContext(YandexMapContext);
  if (!context?.api) {
    return null;
  }

  const { YMapControls, YMapControl } = context?.api;
  const position = props.position ?? 'right';

  if (!YMapControls || !YMapControl) {
    return null;
  }

  return (
    <div className='GGGGGG absolute top-0 right-0 z-100'>
      <YMapControl transparent>
        <YandexMapControlsZoomPlus className={styles.yandexMapsZoomPlus} />
      </YMapControl>

      <YMapControl transparent>
        <YandexMapControlsZoomMinus className={styles.yandexMapsZoomMinus} />
      </YMapControl>
    </div>
  );
}
