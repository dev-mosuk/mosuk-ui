import { CellSliderProps } from '@/components/slider-cell/.partials/components/component.interface';
import styles from '@/components/slider-cell/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSlider({
  variant = 'default',
  orientation = 'horizontal',
  isDisabled,
  className,
  ...rest
}: CellSliderProps) {
  return (
    <Slider.Root
      {...rest}
      orientation={orientation}
      disabled={isDisabled}
      data-variant={variant}
      className={classNames(
        'mosuk-cell-slider',
        '@container/cell-slider',
        'group/cell-slider',
        styles.root,
        className,
      )}
    />
  );
}
