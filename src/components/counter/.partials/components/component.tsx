'use client';

import type { CounterProps } from '@/components/counter/.partials/components/component.interface';
import { CounterCount } from '@/components/counter/.partials/components/count/component';
import { CounterFlip } from '@/components/counter/.partials/components/flip/component';
import { COUNTER_DEFAULT_ANIMATION } from '@/components/counter/.partials/constants/component.constants';
import { CounterAnimation } from '@/components/counter/.partials/enums/component.enums';
import { CounterProvider } from '@/components/counter/.partials/providers/provider';
import { counterFractionDigits } from '@/components/counter/.partials/utilities/util';
import React, { type ElementType } from 'react';

export function Counter<C extends ElementType = 'span'>({
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
      {isFlip ? <CounterFlip {...shared} /> : <CounterCount {...shared} />}
    </CounterProvider>
  );
}
