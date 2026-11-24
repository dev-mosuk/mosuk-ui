'use client';

import { SliderStepsProps } from '@/components/slider/.partials/components/steps/component.interface';
import { SliderContext } from '@/components/slider/.partials/providers/context/context';
import styles from '@/components/slider/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useContext, type CSSProperties } from 'react';

function getDecimalPlaces(value: number) {
  const [coefficient, exponent = '0'] = value.toString().split('e');
  return Math.max(0, (coefficient!.split('.')[1]?.length ?? 0) - Number(exponent));
}

function getStepStyle(
  percent: number,
  inset: boolean,
  vertical: boolean,
): CSSProperties {
  if (!inset) {
    const edge = `${percent * 100}%`;
    return vertical ? { bottom: edge } : { insetInlineStart: edge };
  }

  const thumbMain = 'calc(var(--spacing) * var(--slider-size) * 1.4)';
  const offset = `calc(${thumbMain} / 2 + (100% - ${thumbMain}) * ${percent})`;
  return vertical ? { bottom: offset } : { insetInlineStart: offset };
}

export function SliderSteps({ className, ...rest }: SliderStepsProps) {
  const context = useContext(SliderContext);

  if (!context) {
    return null;
  }

  const { min, max, step, values, orientation, thumbAlignment, isDisabled } =
    context;

  const stepCount = (max - min) / step;
  const count =
    Math.floor(stepCount + Number.EPSILON * Math.max(1, stepCount) * 4) + 1;

  if (
    !Number.isFinite(min) ||
    !Number.isFinite(max) ||
    max < min ||
    !Number.isFinite(step) ||
    step <= 0 ||
    !Number.isFinite(count) ||
    count <= 0 ||
    count > 1000
  ) {
    return null;
  }

  const precision = Math.max(getDecimalPlaces(min), getDecimalPlaces(step));
  const inset = thumbAlignment !== 'center';
  const startValue = values.length > 1 ? values[0]! : min;
  const endValue = values[values.length - 1]!;
  const vertical = orientation === 'vertical';

  return (
    <div
      {...rest}
      aria-hidden="true"
      data-disabled={isDisabled || undefined}
      data-orientation={orientation}
      className={classNames('mosuk-slider-steps', styles.steps, className)}
    >
      {Array.from({ length: count }, (_, index) => {
        const rawValue = min + index * step;
        const value = Math.min(
          max,
          precision <= 100 ? Number(rawValue.toFixed(precision)) : rawValue,
        );
        const percent = max === min ? 0 : (value - min) / (max - min);
        const isFilled = value >= startValue && value <= endValue;

        return (
          <span
            key={index}
            data-filled={isFilled || undefined}
            data-value={value}
            className={classNames('mosuk-slider-step', styles.step)}
            style={getStepStyle(percent, inset, vertical)}
          />
        );
      })}
    </div>
  );
}
