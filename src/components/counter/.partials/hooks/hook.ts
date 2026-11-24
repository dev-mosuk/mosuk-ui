import type { UseCounterProps } from '@/components/counter/.partials/hooks/hook.interface';
import { CounterContext } from '@/components/counter/.partials/providers/context/context';
import { useContext, useEffect, type RefObject } from 'react';

export function useCounter(): UseCounterProps {
  const context = useContext(CounterContext);

  if (!context) {
    throw new Error('useCounter must be used within Counter');
  }

  return context;
}

export function useCounterCountAnimation(
  ref: RefObject<HTMLElement | null>,
): void {
  const { value, maximumFractionDigits, formatValue } = useCounter();

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    let rafId = 0;
    let isActive = true;
    let finished = false;

    const tolerance =
      maximumFractionDigits > 0
        ? 0.5 * 10 ** -maximumFractionDigits
        : Math.max(1e-6, Math.abs(value) * 1e-9);

    const applyFinal = () => {
      element.textContent = formatValue(value);
    };

    const stopRaf = () => {
      if (rafId !== 0) {
        cancelAnimationFrame(rafId);
        rafId = 0;
      }
    };

    const complete = () => {
      if (!isActive || finished) {
        return;
      }

      finished = true;
      stopRaf();
      applyFinal();
    };

    const onTransitionEnd = (event: TransitionEvent) => {
      if (event.target !== element) {
        return;
      }

      if (event.propertyName !== '--value') {
        return;
      }

      complete();
    };

    element.addEventListener('transitionend', onTransitionEnd);

    requestAnimationFrame(() => {
      if (!element || !isActive) {
        return;
      }

      element.style.setProperty('--value', String(value));
    });

    const animate = () => {
      if (!isActive || !element || finished) {
        return;
      }

      try {
        const currentValue =
          parseFloat(getComputedStyle(element).getPropertyValue('--value')) ||
          0;

        element.textContent = formatValue(currentValue);

        if (Math.abs(currentValue - value) <= tolerance) {
          complete();

          return;
        }
      } catch {
        // ignore computed-style failures mid-animation
      }

      rafId = requestAnimationFrame(animate);
    };

    rafId = requestAnimationFrame(animate);

    return () => {
      isActive = false;
      stopRaf();
      element.removeEventListener('transitionend', onTransitionEnd);
    };
  }, [ref, value, maximumFractionDigits, formatValue]);
}
