export type SliderOrientation = 'horizontal' | 'vertical';

export type SliderThumbAlignment = 'center' | 'edge' | 'edge-client-only';

export interface SliderContextProps {
  min: number;
  max: number;
  step: number;
  values: readonly number[];
  orientation: SliderOrientation;
  thumbAlignment: SliderThumbAlignment;
  isDisabled: boolean;
}
