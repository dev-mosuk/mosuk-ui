'use client';

import type { CounterFlipProps } from '@/components/counter/.partials/components/flip/component.interface';
import { useCounter } from '@/components/counter/.partials/hooks/hook';
import styles from '@/components/counter/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType, useMemo } from 'react';

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] as const;

export function CounterFlip<C = 'span'>({
  as,
  ref,
  className,
  ...rest
}: CounterFlipProps<C>) {
  const Component = (as || 'span') as ElementType;
  const { value, formatValue } = useCounter();

  const characters = useMemo(
    () => Array.from(formatValue(value)),
    [formatValue, value],
  );

  return (
    <Component
      {...rest}
      ref={ref}
      className={classNames('mosuk-counter', styles.counter, className)}
      data-animation='flip'
    >
      {characters.map((character, index) => {
        const isDigit = character >= '0' && character <= '9';

        if (!isDigit) {
          return (
            <span
              key={`s-${index}-${character}`}
              className={styles.symbol}
              aria-hidden='true'
            >
              {character}
            </span>
          );
        }

        const digit = Number(character);

        return (
          <span
            key={`d-${index}`}
            className={styles.digit}
            style={{ '--digit': digit } as React.CSSProperties}
            aria-hidden='true'
          >
            <span className={styles.strip}>
              {DIGITS.map((item) => (
                <span key={item} className={styles.glyph}>
                  {item}
                </span>
              ))}
            </span>
          </span>
        );
      })}
      <span className={styles.srOnly}>{formatValue(value)}</span>
    </Component>
  );
}
