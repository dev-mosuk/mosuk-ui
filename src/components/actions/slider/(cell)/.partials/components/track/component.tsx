import { CellSliderTrackProps } from '@/components/actions/slider/(cell)/.partials/components/track/component.interface';
import styles from '@/components/actions/slider/(cell)/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React from 'react';

export function CellSliderTrack({ ...rest }: CellSliderTrackProps) {
  return (
    <Slider.Control
      className={classNames('mosuk-cell-slider-control', styles.control)}
    >
      <Slider.Track
        {...rest}
        className={classNames(
          'mosuk-cell-slider-track',
          styles.track,
          rest?.className,
        )}
      />
    </Slider.Control>
  );
}
