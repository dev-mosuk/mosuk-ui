import { CellSliderIndicatorProps } from '@/components/actions/slider/(cell)/.partials/components/indicator/component.interface';
import styles from '@/components/actions/slider/(cell)/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSliderIndicator({ ...rest }: CellSliderIndicatorProps) {
  return (
    <Slider.Indicator
      {...rest}
      className={classNames(
        'mosuk-cell-slider-indicator',
        styles.indicator,
        rest?.className,
      )}
    />
  );
}
