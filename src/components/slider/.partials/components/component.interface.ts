import { Slider } from '@base-ui/react/slider';

export type SliderProps = Omit<Slider.Root.Props, 'disabled'> & {
  isDisabled?: boolean;
};
