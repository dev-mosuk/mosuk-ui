import classNames from 'classnames';
import React, { ElementType, forwardRef, useEffect, useRef } from 'react';
import { CounterProps } from './component.interface';
import styles from './component.module.css';

export const Counter = forwardRef<HTMLSpanElement, CounterProps>((props, externalRef) => {
  const { children, as, className, style, ...rest } = props;

  const Component = (as || 'span') as ElementType;
  const internalRef = useRef<HTMLSpanElement>(null);

  // Объединяем внутренний и внешний ref "на месте"
  const ref = (element: HTMLSpanElement | null) => {
    internalRef.current = element;
    if (externalRef) {
      if (typeof externalRef === 'function') {
        externalRef(element);
      } else {
        (externalRef as React.MutableRefObject<HTMLSpanElement | null>).current = element;
      }
    }
  };

  const childStr = String(children);

  const extractNumber = (str: string): number => {
    return parseFloat(str.replace(/[^\d.,-]/g, '').replace(/,/g, '.')) || 0;
  };

  const targetValue = extractNumber(childStr);

  useEffect(() => {
    if (internalRef.current) {
      internalRef.current.style.setProperty('--value', String(targetValue));
    }
  }, [targetValue]);

  useEffect(() => {
    if (!internalRef.current) return;

    let rafId: number;

    const updateText = () => {
      const computed = getComputedStyle(internalRef.current!);
      const currentValue = parseFloat(computed.getPropertyValue('--value')) || 0;

      const formattedNumber = new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
      }).format(Math.round(currentValue));

      internalRef.current!.textContent = formattedNumber;
      rafId = requestAnimationFrame(updateText);
    };

    rafId = requestAnimationFrame(updateText);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <Component
      {...rest}
      ref={ref}
      className={classNames(styles.counter, className)}
      style={{ '--value': targetValue, ...style } as React.CSSProperties}
    >
      {childStr}
    </Component>
  );
});