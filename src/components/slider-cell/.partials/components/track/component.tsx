import { CellSliderThumb } from '@/components/slider-cell/.partials/components/thumb/component';
import { CellSliderTrackProps } from '@/components/slider-cell/.partials/components/track/component.interface';
import styles from '@/components/slider-cell/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React, { Children, isValidElement, type ReactElement, type ReactNode } from 'react';

function isThumb(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === CellSliderThumb;
}

export function CellSliderTrack({
  children,
  className,
  ...rest
}: CellSliderTrackProps) {
  const childArray = Children.toArray(children);
  const thumbs: ReactElement[] = [];
  const trackChildren: ReactNode[] = [];

  for (const child of childArray) {
    if (isThumb(child)) {
      thumbs.push(child);
    } else {
      trackChildren.push(child);
    }
  }

  return (
    <Slider.Control
      className={classNames('mosuk-cell-slider-control', styles.control)}
    >
      <Slider.Track
        {...rest}
        className={classNames(
          'mosuk-cell-slider-track',
          styles.track,
          className,
        )}
      >
        {trackChildren}
      </Slider.Track>
      {thumbs}
    </Slider.Control>
  );
}
