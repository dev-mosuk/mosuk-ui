import { ToggleIndicatorProps } from '@/components/actions/toggle/component/.partials/components/indicator/component.props';
import { useToggle } from '@/components/actions/toggle/component/.partials/hooks/hook';
import styles from '@/components/actions/toggle/component/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType, useEffect, useState } from 'react';

type IndicatorLayout =
  | {
      orientation: 'horizontal';
      left: number;
      width: number;
    }
  | {
      orientation: 'vertical';
      top: number;
      height: number;
    };

export function ToggleIndicator<C extends ElementType = 'div'>({
  as,
  ...rest
}: ToggleIndicatorProps<C>) {
  const Component = (as || 'div') as ElementType;

  const { value, containerRef, optionRefs, orientation } = useToggle();
  const [layout, setLayout] = useState<IndicatorLayout | null>(null);

  useEffect(() => {
    if (value === null || value === undefined) {
      setLayout(null);

      return;
    }

    const updatePosition = () => {
      const el = optionRefs.current.get(value);

      if (!el) {
        setLayout(null);

        return;
      }

      if (orientation === 'vertical') {
        setLayout({
          orientation: 'vertical',
          top: el.offsetTop,
          height: el.offsetHeight,
        });
      } else {
        setLayout({
          orientation: 'horizontal',
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      }
    };

    updatePosition();

    const el = optionRefs.current.get(value);

    if (!el) {
      return;
    }

    const resizeObserver = new ResizeObserver(updatePosition);
    resizeObserver.observe(el);

    const parent = el.offsetParent;
    if (parent) {
      resizeObserver.observe(parent);
    }

    const container = containerRef.current;
    const mutationObserver = container
      ? new MutationObserver(updatePosition)
      : null;
    if (container && mutationObserver) {
      mutationObserver.observe(container, {
        childList: true,
        subtree: false,
      });
    }

    return () => {
      resizeObserver.disconnect();
      mutationObserver?.disconnect();
    };
  }, [value, containerRef, optionRefs, orientation]);

  const inlineStyle =
    layout?.orientation === 'vertical'
      ? {
          '--toggle-indicator-height': `${layout.height}px`,
          '--toggle-indicator-translate-y': `${layout.top}px`,
        }
      : layout?.orientation === 'horizontal'
        ? {
            '--toggle-indicator-width': `${layout.width}px`,
            '--toggle-indicator-translate-x': `${layout.left}px`,
          }
        : undefined;

  return (
    <Component
      {...rest}
      style={{
        ...rest?.style,
        ...(inlineStyle as React.CSSProperties),
      }}
      className={classNames(
        'mosuk-toggle-indicator',
        styles.indicator,
        {
          [styles.hidden]: value === null || value === undefined,
        },
        rest?.className,
      )}
    />
  );
}
