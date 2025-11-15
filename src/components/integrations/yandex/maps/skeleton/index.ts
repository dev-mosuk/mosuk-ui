import { YandexMapsSkeleton as BaseYandexMapsSkeleton } from './component';
import type { YandexMapsSkeletonProps } from './component.interface';
import { YandexMapsMapSkeleton } from './map/component';
import type { YandexMapsMapSkeletonProps } from './map/component.interface';

export const YandexMapsSkeleton = Object.assign(BaseYandexMapsSkeleton, {
  Map: YandexMapsMapSkeleton,
});

export namespace YandexMapsSkeleton {
  export type Props = YandexMapsSkeletonProps;

  export namespace Map {
    export type Props = YandexMapsMapSkeletonProps;
  }
}
