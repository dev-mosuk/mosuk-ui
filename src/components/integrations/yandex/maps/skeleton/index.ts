import { YandexMapSkeleton as Component } from '@/components/integrations/yandex/maps/skeleton/component';
import type { YandexMapSkeletonProps } from '@/components/integrations/yandex/maps/skeleton/component.interface';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/components/integrations/yandex/maps/skeleton/default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerSkeletonProps } from '@/components/integrations/yandex/maps/skeleton/default/scheme/layer/component.interface';

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
