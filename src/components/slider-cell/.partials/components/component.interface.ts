import { Slider } from '@base-ui/react/slider';

export type CellSliderVariant = 'default' | 'secondary';

export type CellSliderProps = Omit<Slider.Root.Props, 'disabled'> & {
  /** Visual style of the cell track. @default 'default' */
  variant?: CellSliderVariant;
  isDisabled?: boolean;
};
