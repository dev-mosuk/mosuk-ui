import { CellSlider as Component } from '@/components/actions/slider/(cell)/.partials/components/component';
import { CellSliderProps } from '@/components/actions/slider/(cell)/.partials/components/component.interface';
import { CellSliderIndicator } from '@/components/actions/slider/(cell)/.partials/components/indicator/component';
import { CellSliderIndicatorProps } from '@/components/actions/slider/(cell)/.partials/components/indicator/component.interface';
import { CellSliderLabel } from '@/components/actions/slider/(cell)/.partials/components/label/component';
import { CellSliderLabelProps } from '@/components/actions/slider/(cell)/.partials/components/label/component.interface';
import { CellSliderThumb } from '@/components/actions/slider/(cell)/.partials/components/thumb/component';
import { CellSliderThumbProps } from '@/components/actions/slider/(cell)/.partials/components/thumb/component.interface';
import { CellSliderTrack } from '@/components/actions/slider/(cell)/.partials/components/track/component';
import { CellSliderTrackProps } from '@/components/actions/slider/(cell)/.partials/components/track/component.interface';
import { CellSliderValue } from '@/components/actions/slider/(cell)/.partials/components/value/component';
import { CellSliderValueProps } from '@/components/actions/slider/(cell)/.partials/components/value/component.interface';
import { CellSliderSkeleton as SkeletonComponent } from '@/components/actions/slider/(cell)/.partials/skeleton/components/component';
import type { CellSliderSkeletonProps } from '@/components/actions/slider/(cell)/.partials/skeleton/components/component.interface';

export const CellSlider = Object.assign(Component, {
  Label: CellSliderLabel,
  Value: CellSliderValue,
  Track: CellSliderTrack,
  Indicator: CellSliderIndicator,
  Thumb: CellSliderThumb,
});

export namespace CellSlider {
  export type Props = CellSliderProps;

  export namespace Label {
    export type Props = CellSliderLabelProps;
  }

  export namespace Value {
    export type Props = CellSliderValueProps;
  }

  export namespace Track {
    export type Props = CellSliderTrackProps;
  }

  export namespace Indicator {
    export type Props = CellSliderIndicatorProps;
  }

  export namespace Thumb {
    export type Props = CellSliderThumbProps;
  }
}

export const CellSliderSkeleton = Object.assign(SkeletonComponent, {});

export namespace CellSliderSkeleton {
  export type Props = CellSliderSkeletonProps;
}
