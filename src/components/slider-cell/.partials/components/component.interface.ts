import type { CellSliderVariant } from '@/components/slider-cell/.partials/enums/component.enums';
import { Slider } from '@base-ui/react/slider';
import type { CSSProperties } from 'react';

type CellSliderOwnProps = {
  size?: number;
  variant?: CellSliderVariant | `${CellSliderVariant}`;
  isDisabled?: boolean;
  style?: CSSProperties;
};

export type CellSliderProps = CellSliderOwnProps &
  Omit<Slider.Root.Props, 'disabled' | 'orientation' | 'style' | 'size'>;
