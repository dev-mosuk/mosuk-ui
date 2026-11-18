import { SliderTrackProps } from '@/components/actions/slider/.partials/components/track/component.interface';
import styles from '@/components/actions/slider/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function SliderTrack({ ...rest }: SliderTrackProps) {
  return (
    <Slider.Control
      className={classNames('mosuk-slider-control', styles.control)}
    >
      <Slider.Track
        {...rest}
        className={classNames(
          'mosuk-slider-track',
          styles.track,
          rest?.className,
        )}
      />
    </Slider.Control>
  );
}
