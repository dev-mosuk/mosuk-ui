import { SegmentProps } from '@/components/segment/.partials/components/component.interface';
import {
  SEGMENT_DEFAULT_ORIENTATION,
  SEGMENT_DEFAULT_VARIANT,
} from '@/components/segment/.partials/constants/component.constants';
import { SegmentProvider } from '@/components/segment/.partials/providers/provider';
import styles from '@/components/segment/.partials/styles/component.module.css';
import { scrollSegmentOptionIntoView } from '@/components/segment/.partials/utilities/scroll-segment-option-into-view';
import { Tabs } from '@base-ui/react/tabs';
import classNames from 'classnames';
import React, {
  createElement,
  useCallback,
  useEffect,
  useRef,
  type ElementType,
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
    '.mosuk-segment-button[data-active]',
  ) as HTMLElement | null;

  if (!active) {
    return;
  }

  scrollSegmentOptionIntoView(list, active, orientation, behavior);
}

export function Segment<C = 'div'>({
  as,
  size,
  variant = SEGMENT_DEFAULT_VARIANT,
  orientation = SEGMENT_DEFAULT_ORIENTATION,
  activateOnFocus,
  loopFocus,
  value,
  defaultValue,
  onChange,
  className,
  style,
  onClickCapture,
  ref,
  children,
  ...rest
}: SegmentProps<C>) {
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
        orientation === 'vertical'
          ? overflowsVertically
          : overflowsHorizontally;

      if (!overflows) {
        return;
      }

      const optionEl = (e.target as HTMLElement)?.closest?.(
        '.mosuk-segment-button',
      ) as HTMLElement | null;

      if (!optionEl || !list.contains(optionEl)) {
        return;
      }

      requestAnimationFrame(() => {
        scrollSegmentOptionIntoView(list, optionEl, orientation, 'smooth');
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

  const listRender = as ? createElement(as as ElementType) : undefined;

  const rootDefaultValue =
    value !== undefined ? undefined : (defaultValue ?? null);

  return (
    <SegmentProvider size={size}>
      <Tabs.Root
        value={value}
        defaultValue={rootDefaultValue}
        orientation={orientation}
        onValueChange={handleValueChange}
        render={
          <Tabs.List
            {...rest}
            ref={setListRef}
            render={listRender}
            activateOnFocus={activateOnFocus}
            loopFocus={loopFocus}
            onClickCapture={handleClickCapture}
            data-size={size != null ? size : undefined}
            data-variant={variant}
            style={style}
            className={classNames(
              'mosuk-segment',
              'group/segment',
              styles.segment,
              className,
            )}
          />
        }
      >
        {children}
      </Tabs.Root>
    </SegmentProvider>
  );
}
