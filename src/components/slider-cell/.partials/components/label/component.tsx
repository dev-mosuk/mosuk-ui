import { CellSliderLabelProps } from '@/components/slider-cell/.partials/components/label/component.interface';
import styles from '@/components/slider-cell/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSliderLabel({ ...rest }: CellSliderLabelProps) {
  return (
    <Slider.Label
      {...rest}
      className={classNames(
        'mosuk-cell-slider-label',
        styles.label,
        rest?.className,
      )}
    />
  );
}
