import { CellSliderProps } from '@/components/actions/slider/(cell)/.partials/components/component.interface';
import styles from '@/components/actions/slider/(cell)/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSlider({
  variant = 'default',
  orientation = 'horizontal',
  ...rest
}: CellSliderProps) {
  return (
    <Slider.Root
      {...rest}
      orientation={orientation}
      data-variant={variant}
      className={classNames('mosuk-cell-slider', styles.root, rest?.className)}
    />
  );
}
