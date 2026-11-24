import { CellSlider as Component } from '@/components/slider-cell/.partials/components/component';
import { CellSliderProps } from '@/components/slider-cell/.partials/components/component.interface';
import { CellSliderIndicator } from '@/components/slider-cell/.partials/components/indicator/component';
import { CellSliderIndicatorProps } from '@/components/slider-cell/.partials/components/indicator/component.interface';
import { CellSliderLabel } from '@/components/slider-cell/.partials/components/label/component';
import { CellSliderLabelProps } from '@/components/slider-cell/.partials/components/label/component.interface';
import { CellSliderThumb } from '@/components/slider-cell/.partials/components/thumb/component';
import { CellSliderThumbProps } from '@/components/slider-cell/.partials/components/thumb/component.interface';
import { CellSliderTrack } from '@/components/slider-cell/.partials/components/track/component';
import { CellSliderTrackProps } from '@/components/slider-cell/.partials/components/track/component.interface';
import { CellSliderValue } from '@/components/slider-cell/.partials/components/value/component';
import { CellSliderValueProps } from '@/components/slider-cell/.partials/components/value/component.interface';
import { CellSliderVariant } from '@/components/slider-cell/.partials/enums/component.enums';

export const CellSlider = Object.assign(Component, {
  Label: CellSliderLabel,
  Value: CellSliderValue,
  Track: CellSliderTrack,
  Indicator: CellSliderIndicator,
  Thumb: CellSliderThumb,
  ENUMS: {
    Variant: CellSliderVariant,
  },
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
