import { SliderLabelProps } from '@/components/slider/.partials/components/label/component.interface';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function SliderLabel({ ...rest }: SliderLabelProps) {
  return (
    <Slider.Label
      {...rest}
      className={classNames(
        'mosuk-slider-label',
        styles.label,
        rest?.className,
      )}
    />
  );
}
