'use client';

import { SliderProps } from '@/components/slider/.partials/components/component.interface';
import {
  SLIDER_DEFAULT_MAX,
  SLIDER_DEFAULT_MIN,
  SLIDER_DEFAULT_ORIENTATION,
  SLIDER_DEFAULT_SIZE,
  SLIDER_DEFAULT_STEP,
  SLIDER_DEFAULT_THUMB_ALIGNMENT,
  SLIDER_DEFAULT_VARIANT,
} from '@/components/slider/.partials/constants/component.constants';
import { SliderProvider } from '@/components/slider/.partials/providers/provider';
import styles from '@/components/slider/.partials/styles/component.module.css';
import { Slider as BaseSlider } from '@base-ui/react/slider';
import classNames from 'classnames';
import React, { useState, type CSSProperties } from 'react';

function toValues(
  value: number | readonly number[] | undefined,
  fallback: number,
): readonly number[] {
  if (value === undefined) {
    return [fallback];
  }

  if (typeof value === 'number') {
    return [value];
  }

  return [...value];
}

export function Slider({
  size = SLIDER_DEFAULT_SIZE,
  variant = SLIDER_DEFAULT_VARIANT,
  orientation = SLIDER_DEFAULT_ORIENTATION,
  thumbAlignment = SLIDER_DEFAULT_THUMB_ALIGNMENT,
  min = SLIDER_DEFAULT_MIN,
  max = SLIDER_DEFAULT_MAX,
  step = SLIDER_DEFAULT_STEP,
  isDisabled,
  className,
  style,
  value,
  defaultValue,
  onValueChange,
  ...rest
}: SliderProps) {
  const [values, setValues] = useState<readonly number[]>(() =>
    toValues(value ?? defaultValue, min),
  );

  const resolvedValues =
    value !== undefined ? toValues(value, min) : values;

  return (
    <SliderProvider
      min={min}
      max={max}
      step={step}
      values={resolvedValues}
      orientation={orientation}
      thumbAlignment={thumbAlignment}
      isDisabled={Boolean(isDisabled)}
    >
      <BaseSlider.Root
        {...rest}
        min={min}
        max={max}
        step={step}
        orientation={orientation}
        value={value}
        defaultValue={defaultValue}
        thumbAlignment={thumbAlignment}
        disabled={isDisabled}
        data-size={size}
        data-variant={variant}
        onValueChange={(next, details) => {
          setValues(toValues(next, min));
          onValueChange?.(next, details);
        }}
        style={
          {
            '--slider-size': size,
            ...style,
          } as CSSProperties
        }
        className={classNames(
          'mosuk-slider',
          '@container/slider',
          'group/slider',
          styles.slider,
          className,
        )}
      />
    </SliderProvider>
  );
}
