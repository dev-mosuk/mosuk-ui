'use client';

import type { CounterProps } from '@/components/counter/.partials/components/component.interface';
import { CounterCount } from '@/components/counter/.partials/components/count/component';
import type { CounterCountProps } from '@/components/counter/.partials/components/count/component.interface';
import { CounterFlip } from '@/components/counter/.partials/components/flip/component';
import type { CounterFlipProps } from '@/components/counter/.partials/components/flip/component.interface';
import { COUNTER_DEFAULT_ANIMATION } from '@/components/counter/.partials/constants/component.constants';
import { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';
import { CounterProvider } from '@/components/counter/.partials/providers/provider';
import { counterFractionDigits } from '@/components/counter/.partials/utilities/util';
import React from 'react';

export function Counter<C = 'span'>({
  value,
  animation = COUNTER_DEFAULT_ANIMATION,
  as,
  ref,
  className,
  style,
  ...rest
}: CounterProps<C>) {
  const maximumFractionDigits = counterFractionDigits(value);
  const isFlip = animation === CounterAnimation.Flip;
  const shared = {
    as,
    ref,
    className,
    style,
    ...rest,
  };

  return (
    <CounterProvider
      value={value}
      animation={animation}
      maximumFractionDigits={maximumFractionDigits}
    >
      {isFlip ? (
        <CounterFlip {...(shared as CounterFlipProps<C>)} />
      ) : (
        <CounterCount {...(shared as CounterCountProps<C>)} />
      )}
    </CounterProvider>
  );
}
