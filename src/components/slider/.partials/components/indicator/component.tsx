import { SliderIndicatorProps } from '@/components/slider/.partials/components/indicator/component.interface';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function SliderIndicator({ ...rest }: SliderIndicatorProps) {
  return (
    <Slider.Indicator
      {...rest}
      className={classNames(
        'mosuk-slider-indicator',
        styles.indicator,
        rest?.className,
      )}
    />
  );
}
