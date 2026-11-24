import type { SliderVariant } from '@/components/slider/.partials/enums/component.enums';
import { Slider } from '@base-ui/react/slider';
import type { CSSProperties } from 'react';

type SliderOwnProps = {
  size?: number;
  variant?: SliderVariant | `${SliderVariant}`;
  orientation?: Slider.Root.Props['orientation'];
  thumbAlignment?: Slider.Root.Props['thumbAlignment'];
  min?: number;
  max?: number;
  step?: number;
  isDisabled?: boolean;
  style?: CSSProperties;
};

export type SliderProps = SliderOwnProps &
  Omit<
    Slider.Root.Props,
    | 'disabled'
    | 'style'
    | 'size'
    | 'orientation'
    | 'thumbAlignment'
    | 'min'
    | 'max'
    | 'step'
  >;
