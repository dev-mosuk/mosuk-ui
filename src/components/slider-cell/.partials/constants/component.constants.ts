import { CellSliderVariant } from '@/components/slider-cell/.partials/enums/component.enums';

export const SLIDER_CELL_DEFAULT_SIZE = 9;
export const SLIDER_CELL_DEFAULT_VARIANT = CellSliderVariant.Primary;
export const SLIDER_CELL_DEFAULT_ORIENTATION = 'horizontal' as const;

/** @deprecated Use SLIDER_CELL_DEFAULT_SIZE */
export const CELL_SLIDER_DEFAULT_SIZE = SLIDER_CELL_DEFAULT_SIZE;
/** @deprecated Use SLIDER_CELL_DEFAULT_VARIANT */
export const CELL_SLIDER_DEFAULT_VARIANT = SLIDER_CELL_DEFAULT_VARIANT;
