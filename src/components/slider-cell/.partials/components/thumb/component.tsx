import { CellSliderThumbProps } from '@/components/actions/slider/(cell)/.partials/components/thumb/component.interface';
import styles from '@/components/actions/slider/(cell)/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSliderThumb({ ...rest }: CellSliderThumbProps) {
  return (
    <Slider.Thumb
      {...rest}
      className={classNames(
        'mosuk-cell-slider-thumb',
        styles.thumb,
        rest?.className,
      )}
    />
  );
}
