import { CellSliderProps } from '@/components/slider-cell/.partials/components/component.interface';
import {
  SLIDER_CELL_DEFAULT_ORIENTATION,
  SLIDER_CELL_DEFAULT_SIZE,
  SLIDER_CELL_DEFAULT_VARIANT,
} from '@/components/slider-cell/.partials/constants/component.constants';
import styles from '@/components/slider-cell/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React, { type CSSProperties } from 'react';

export function CellSlider({
  size = SLIDER_CELL_DEFAULT_SIZE,
  variant = SLIDER_CELL_DEFAULT_VARIANT,
  isDisabled,
  className,
  style,
  ...rest
}: CellSliderProps) {
  return (
    <Slider.Root
      {...rest}
      orientation={SLIDER_CELL_DEFAULT_ORIENTATION}
      disabled={isDisabled}
      data-variant={variant}
      data-size={size}
      style={
        {
          '--cell-slider-size': size,
          ...style,
        } as CSSProperties
      }
      className={classNames(
        'mosuk-cell-slider',
        'group/cell-slider',
        styles.cellSlider,
        className,
      )}
    />
  );
}
