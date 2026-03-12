import classNames from 'classnames';
import React, { ElementType, useId } from 'react';
import styles from '../../../component.module.css';
import { MAP_PATH_ACCENT, MAP_PATH_MAIN } from './component.image';
import type { YandexMapDefaultSchemeLayerSkeletonProps } from './component.interface';

export function YandexMapDefaultSchemeLayerSkeleton<
  C extends ElementType = 'div',
>({ as, ...rest }: YandexMapDefaultSchemeLayerSkeletonProps<C>) {
  const Component = (as || 'div') as ElementType;
  const filterId = useId();

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-yandex-map-default-scheme-layer',
        styles.yandex_map_default_scheme_layer,
        rest?.className,
      )}
    >
      <svg
        viewBox="0 0 1000 1000"
        fillRule="evenodd"
        clipRule="evenodd"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              type="matrix"
              values="0.6 0 0 0 0.2 0 0.6 0 0 0.2 0 0 0.6 0 0.2 0 0 0 1 0"
            />
          </filter>
        </defs>
        <path fill="currentColor" d={MAP_PATH_MAIN} />
        <g fill="currentColor" filter={`url(#${filterId})`}>
          <path d={MAP_PATH_ACCENT} />
        </g>
      </svg>
    </Component>
  );
}
