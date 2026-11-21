import { CellSliderValueProps } from '@/components/slider-cell/.partials/components/value/component.interface';
import styles from '@/components/slider-cell/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSliderValue({ ...rest }: CellSliderValueProps) {
  return (
    <Slider.Value
      {...rest}
      className={classNames(
        'mosuk-cell-slider-value',
        styles.value,
        rest?.className,
      )}
    />
  );
}
