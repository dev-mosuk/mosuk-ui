import classNames from 'classnames';
import React, { ElementType, forwardRef, useEffect, useRef } from 'react';
import { CounterProps } from './component.interface';
import styles from './component.module.css';

export const Counter = forwardRef<HTMLSpanElement, CounterProps>((props, externalRef) => {
  const { children, as, className, style, ...rest } = props;

  const Component = (as || 'span') as ElementType;
  const ref = useRef<HTMLSpanElement>(null);

  // Преобразуем children в число
  const targetValue = typeof children === 'number'
    ? children
    : parseFloat(String(children).replace(/[^\d.,-]/g, '').replace(/,/g, '.')) || 0;

  // Определяем количество десятичных знаков в исходном числе
  const getDecimalPlaces = (num: number): number => {
    const match = String(num).match(/(?:\.(\d+))?$/);
    return match && match[1] ? match[1].length : 0;
  };

  const maxDigits = getDecimalPlaces(targetValue);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let rafId: number;
    let isActive = true;

    // Небольшая задержка для запуска transition
    requestAnimationFrame(() => {
      if (!element || !isActive) return;

      // Устанавливаем целевое значение для запуска CSS transition
      element.style.setProperty('--value', String(targetValue));
    });

    const animate = () => {
      if (!isActive || !element) return;

      try {
        const currentValue = parseFloat(getComputedStyle(element).getPropertyValue('--value')) || 0;
        element.textContent = new Intl.NumberFormat('ru-RU', {
          minimumFractionDigits: 0,
          maximumFractionDigits: maxDigits,
        }).format(currentValue);
      } catch { }

      if (isActive) rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
    };
  }, [targetValue, maxDigits]);

  // Объединяем refs
  useEffect(() => {
    if (externalRef) {
      if (typeof externalRef === 'function') {
        externalRef(ref.current);
      } else {
        (externalRef as React.MutableRefObject<HTMLSpanElement | null>).current = ref.current;
      }
    }
  }, [externalRef]);

  return (
    <Component
      {...rest}
      ref={ref}
      className={classNames(styles.counter, className)}
      style={{ '--value': 0, ...style } as React.CSSProperties}
    >
      0
    </Component>
  );
});