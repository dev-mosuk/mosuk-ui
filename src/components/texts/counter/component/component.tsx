import classNames from 'classnames';
import React, { ElementType, forwardRef, useEffect, useRef } from 'react';
import { CounterProps } from './component.interface';
import styles from './component.module.css';

export const Counter = forwardRef<HTMLSpanElement, CounterProps>(
  (props, externalRef) => {
    const { children, as, className, style, ...rest } = props;

    const Component = (as || 'span') as ElementType;
    const ref = useRef<HTMLSpanElement>(null);

    // Преобразуем children в число
    const targetValue =
      typeof children === 'number'
        ? children
        : parseFloat(
            String(children)
              .replace(/[^\d.,-]/g, '')
              .replace(/,/g, '.'),
          ) || 0;

    // Определяем количество десятичных знаков в исходном числе
    const getDecimalPlaces = (num: number): number => {
      const match = String(num).match(/(?:\.(\d+))?$/);
      return match && match[1] ? match[1].length : 0;
    };

    const maxDigits = getDecimalPlaces(targetValue);

    useEffect(() => {
      const element = ref.current;
      if (!element) return;

      let rafId = 0;
      let isActive = true;
      let finished = false;

      const formatter = new Intl.NumberFormat('ru-RU', {
        minimumFractionDigits: 0,
        maximumFractionDigits: maxDigits,
      });

      const tolerance =
        maxDigits > 0
          ? 0.5 * 10 ** -maxDigits
          : Math.max(1e-6, Math.abs(targetValue) * 1e-9);

      const applyFinal = () => {
        if (!element) return;
        element.textContent = formatter.format(targetValue);
      };

      const stopRaf = () => {
        if (rafId !== 0) {
          cancelAnimationFrame(rafId);
          rafId = 0;
        }
      };

      const complete = () => {
        if (!isActive || finished) return;
        finished = true;
        stopRaf();
        applyFinal();
      };

      const onTransitionEnd = (event: TransitionEvent) => {
        if (event.target !== element) return;
        // Registered custom property: Chromium reports "--value"
        if (event.propertyName !== '--value') return;
        complete();
      };

      element.addEventListener('transitionend', onTransitionEnd);

      // Небольшая задержка для запуска transition
      requestAnimationFrame(() => {
        if (!element || !isActive) return;

        // Устанавливаем целевое значение для запуска CSS transition
        element.style.setProperty('--value', String(targetValue));
      });

      const animate = () => {
        if (!isActive || !element || finished) return;

        try {
          const currentValue =
            parseFloat(getComputedStyle(element).getPropertyValue('--value')) ||
            0;
          element.textContent = formatter.format(currentValue);

          if (Math.abs(currentValue - targetValue) <= tolerance) {
            complete();
            return;
          }
        } catch {}

        rafId = requestAnimationFrame(animate);
      };

      rafId = requestAnimationFrame(animate);

      return () => {
        isActive = false;
        stopRaf();
        element.removeEventListener('transitionend', onTransitionEnd);
      };
    }, [targetValue, maxDigits]);

    // Объединяем refs
    useEffect(() => {
      if (externalRef) {
        if (typeof externalRef === 'function') {
          externalRef(ref.current);
        } else {
          (
            externalRef as React.MutableRefObject<HTMLSpanElement | null>
          ).current = ref.current;
        }
      }
    }, [externalRef]);

    return (
      <Component
        {...rest}
        ref={ref}
        className={classNames(styles.counter, className)}
        // Не задаём --value через React: при каждом ре-рендере это сбрасывало бы
        // переменную и срывало transition, из‑за чего RAF никогда не останавливался.
        // Начальное значение задаётся в CSS (@property --value initial-value: 0).
        style={style as React.CSSProperties}
      >
        0
      </Component>
    );
  },
);
