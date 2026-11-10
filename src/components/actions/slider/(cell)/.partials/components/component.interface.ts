import { Slider } from '@base-ui/react/slider';

export type CellSliderVariant = 'default' | 'secondary';

export type CellSliderProps = Slider.Root.Props & {
  /** Visual style of the cell track. @default 'default' */
  variant?: CellSliderVariant;
};
