import { SliderThumbProps } from '@/components/slider/.partials/components/thumb/component.interface';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function SliderThumb({ ...rest }: SliderThumbProps) {
  return (
    <Slider.Thumb
      {...rest}
      className={classNames(
        'mosuk-slider-thumb',
        styles.thumb,
        rest?.className,
      )}
    />
  );
}
