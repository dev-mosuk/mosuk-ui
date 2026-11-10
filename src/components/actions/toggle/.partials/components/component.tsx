import { ToggleProps } from '@/components/actions/toggle/.partials/components/component.interface';
import styles from '@/components/actions/toggle/.partials/styles/component.module.css';
import { scrollToggleOptionIntoView } from '@/components/actions/toggle/.partials/utilities/scroll-toggle-option-into-view';
import { Tabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React, {
  ElementType,
  createElement,
  useCallback,
  useEffect,
  useRef,
} from 'react';

function scrollActiveIntoView(
  list: HTMLElement | null,
  orientation: 'horizontal' | 'vertical',
  behavior: 'auto' | 'smooth',
) {
  if (!list) {
    return;
  }

  const active = list.querySelector(
    '.mosuk-toggle-button[data-active]',
  ) as HTMLElement | null;

  if (!active) {
    return;
  }

  scrollToggleOptionIntoView(list, active, orientation, behavior);
}

export function Toggle<C extends ElementType = 'div'>({
  as,
  value,
  defaultValue,
  onChange,
  orientation = 'horizontal',
  activateOnFocus,
  loopFocus,
  className,
  style,
  onClickCapture,
  ref,
  children,
  ...rest
}: ToggleProps<C>) {
  const listRef = useRef<HTMLElement | null>(null);
  const orientationRef = useRef(orientation);
  orientationRef.current = orientation;

  const setListRef = useCallback(
    (node: HTMLElement | null) => {
      listRef.current = node;

      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        (ref as React.MutableRefObject<HTMLElement | null>).current = node;
      }
    },
    [ref],
  );

  const handleValueChange = useCallback(
    (next: any) => {
      onChange?.(next);

      requestAnimationFrame(() => {
        scrollActiveIntoView(listRef.current, orientationRef.current, 'smooth');
      });
    },
    [onChange],
  );

  const handleClickCapture = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClickCapture?.(e);
      if (e.defaultPrevented || !listRef.current) {
        return;
      }

      const list = listRef.current;
      const overflowsHorizontally = list.scrollWidth > list.clientWidth;
      const overflowsVertically = list.scrollHeight > list.clientHeight;
      const overflows =
        orientation === 'vertical' ? overflowsVertically : overflowsHorizontally;

      if (!overflows) {
        return;
      }

      const optionEl = (e.target as HTMLElement)?.closest?.(
        '.mosuk-toggle-button',
      ) as HTMLElement | null;

      if (!optionEl || !list.contains(optionEl)) {
        return;
      }

      requestAnimationFrame(() => {
        scrollToggleOptionIntoView(list, optionEl, orientation, 'smooth');
      });
    },
    [onClickCapture, orientation],
  );

  useEffect(() => {
    const list = listRef.current;
    if (!list) {
      return;
    }

    const runPassiveScroll = () => {
      scrollActiveIntoView(list, orientationRef.current, 'auto');
    };

    const resizeObserver = new ResizeObserver(runPassiveScroll);
    resizeObserver.observe(list);

    const mutationObserver = new MutationObserver(runPassiveScroll);
    mutationObserver.observe(list, { childList: true, subtree: true });

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    requestAnimationFrame(() => {
      scrollActiveIntoView(listRef.current, orientation, 'smooth');
    });
  }, [value, orientation]);

  const listRender = as ? createElement(as) : undefined;

  const rootDefaultValue =
    value !== undefined ? undefined : (defaultValue ?? null);

  return (
    <Tabs.Root
      value={value}
      defaultValue={rootDefaultValue}
      orientation={orientation}
      onValueChange={handleValueChange}
    >
      <Tabs.List
        {...rest}
        ref={setListRef}
        render={listRender}
        activateOnFocus={activateOnFocus}
        loopFocus={loopFocus}
        onClickCapture={handleClickCapture}
        style={style}
        className={classNames('mosuk-toggle', styles.toggle, className)}
      >
        {children}
      </Tabs.List>
    </Tabs.Root>
  );
}
