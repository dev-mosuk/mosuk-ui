'use client';

import type { CounterCountProps } from '@/components/counter/.partials/components/count/component.interface';
import { useCounterCountAnimation } from '@/components/counter/.partials/hooks/hook';
import styles from '@/components/counter/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType, useCallback, useRef } from 'react';

export function CounterCount({
  as,
  ref: externalRef,
  className,
  style,
  ...rest
}: CounterCountProps) {
  const Component = (as || 'span') as ElementType;
  const ref = useRef<HTMLElement | null>(null);

  useCounterCountAnimation(ref);

  const setRefs = useCallback(
    (node: HTMLElement | null) => {
      ref.current = node;

      if (!externalRef) {
        return;
      }

      if (typeof externalRef === 'function') {
        externalRef(node);
      } else {
        (
          externalRef as React.MutableRefObject<HTMLElement | null>
        ).current = node;
      }
    },
    [externalRef],
  );

  return (
    <Component
      {...rest}
      ref={setRefs}
      className={classNames('mosuk-counter', styles.counter, className)}
      data-animation='count'
      style={style as React.CSSProperties}
    >
      0
    </Component>
  );
}
