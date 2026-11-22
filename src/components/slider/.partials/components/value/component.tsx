import { SliderValueProps } from '@/components/slider/.partials/components/value/component.interface';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function SliderValue({ ...rest }: SliderValueProps) {
  return (
    <Slider.Value
      {...rest}
      className={classNames(
        'mosuk-slider-value',
        styles.value,
        rest?.className,
      )}
    />
  );
}
