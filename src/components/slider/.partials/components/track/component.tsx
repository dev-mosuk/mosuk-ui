import { SliderThumb } from '@/components/slider/.partials/components/thumb/component';
import { SliderTrackProps } from '@/components/slider/.partials/components/track/component.interface';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React, {
  Children,
  isValidElement,
  type ReactElement,
  type ReactNode,
} from 'react';

function isThumb(child: ReactNode): child is ReactElement {
  return isValidElement(child) && child.type === SliderThumb;
}

export function SliderTrack({
  children,
  className,
  ...rest
}: SliderTrackProps) {
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
      className={classNames('mosuk-slider-control', styles.control)}
    >
      <Slider.Track
        {...rest}
        className={classNames('mosuk-slider-track', styles.track, className)}
      >
        {trackChildren}
      </Slider.Track>
      {thumbs}
    </Slider.Control>
  );
}
