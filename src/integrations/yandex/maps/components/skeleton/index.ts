import { YandexMapSkeleton as Component } from '@/integrations/yandex/maps/components/skeleton/component';
import type { YandexMapSkeletonProps } from '@/integrations/yandex/maps/components/skeleton/component.interface';
import { YandexMapDefaultSchemeLayerSkeleton } from '@/integrations/yandex/maps/components/skeleton/default/scheme/layer/component';
import { YandexMapDefaultSchemeLayerSkeletonProps } from '@/integrations/yandex/maps/components/skeleton/default/scheme/layer/component.interface';

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
