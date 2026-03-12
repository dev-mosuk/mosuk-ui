import { YandexMapSkeleton as Component } from './component';
import type { YandexMapSkeletonProps } from './component.interface';
import { YandexMapDefaultSchemeLayerSkeleton } from './default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerSkeletonProps } from './default/scheme/layer/component.interface';

export const YandexMapSkeleton = Object.assign(Component, {
  Default: {
    Scheme: {
      Layer: YandexMapDefaultSchemeLayerSkeleton,
    },
  },
});

export namespace YandexMapSkeleton {
  export type Props = YandexMapSkeletonProps;

  export namespace Default {
    export namespace Scheme {
      export namespace Layer {
        export type Props = YandexMapDefaultSchemeLayerSkeletonProps;
      }
    }
  }
}
