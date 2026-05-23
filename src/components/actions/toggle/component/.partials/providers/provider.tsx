'use client';

import { ToggleContext } from '@/components/actions/toggle/component/.partials/providers/context/context';
import { ToggleProviderProps } from '@/components/actions/toggle/component/.partials/providers/provider.interface';
import { scrollToggleOptionIntoView } from '@/components/actions/toggle/component/.partials/utilities/scroll-toggle-option-into-view';
import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';

export function ToggleProvider({
  value: controlledValue,
  onChange: controlledOnChange,
  containerRef,
  orientation = 'horizontal',
  children,
}: ToggleProviderProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState<any | null>(null);
  const optionRefs = useRef<Map<any, HTMLElement>>(new Map());
  const fallbackContainerRef = useRef<HTMLElement | null>(null);

  const value =
    controlledValue !== undefined ? controlledValue : uncontrolledValue;

  const valueRef = useRef(value);
  const orientationRef = useRef(orientation);
  valueRef.current = value;
  orientationRef.current = orientation;

  const onChange = useCallback(
    (nextValue: any) => {
      if (controlledOnChange) {
        controlledOnChange(nextValue);
      } else {
        setUncontrolledValue(nextValue);
      }
    },
    [controlledOnChange],
  );

  const registerOption = useCallback((val: any, el: HTMLElement | null) => {
    if (el) {
      optionRefs.current.set(val, el);
    } else {
      optionRefs.current.delete(val);
    }
  }, []);

  const contextValue = useMemo(
    () => ({
      value,
      onChange,
      containerRef: containerRef ?? fallbackContainerRef,
      optionRefs,
      registerOption,
      orientation,
    }),
    [value, onChange, containerRef, orientation],
  );

  const rootRef = containerRef ?? fallbackContainerRef;

  useLayoutEffect(() => {
    if (value === null || value === undefined) {
      return;
    }

    let cancelled = false;

    const attempt = (n: number) => {
      if (cancelled) {
        return;
      }

      const container = rootRef.current;
      const el = optionRefs.current.get(value);

      if (!container || !el) {
        if (n < 12) {
          requestAnimationFrame(() => attempt(n + 1));
        }

        return;
      }

      scrollToggleOptionIntoView(container, el, orientation, 'smooth');
    };

    attempt(0);

    return () => {
      cancelled = true;
    };
  }, [value, orientation, rootRef]);

  useEffect(() => {
    const container = rootRef.current;
    if (!container) {
      return;
    }

    const runPassiveScroll = () => {
      const v = valueRef.current;
      if (v === null || v === undefined) {
        return;
      }
      const el = optionRefs.current.get(v);
      if (!el) {
        return;
      }
      requestAnimationFrame(() => {
        scrollToggleOptionIntoView(
          container,
          el,
          orientationRef.current,
          'auto',
        );
      });
    };

    const resizeObserver = new ResizeObserver(runPassiveScroll);
    resizeObserver.observe(container);

    const mutationObserver = new MutationObserver(runPassiveScroll);
    mutationObserver.observe(container, { childList: true, subtree: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [rootRef]);

  return (
    <ToggleContext.Provider value={contextValue}>
      {children}
    </ToggleContext.Provider>
  );
}
