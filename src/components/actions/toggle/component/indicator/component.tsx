import classNames from 'classnames';
import React, { ElementType, useEffect, useState } from 'react';
import styles from '../component.module.css';
import { useToggle } from '../hooks/hook';
import { ToggleIndicatorProps } from './component.props';

export function ToggleIndicator<C extends ElementType = 'div'>({
  as,
  ...rest
}: ToggleIndicatorProps<C>) {
  const Component = (as || 'div') as ElementType;

  const { value, containerRef, optionRefs } = useToggle();
  const [style, setStyle] = useState<{ left: number; width: number } | null>(
    null,
  );

  useEffect(() => {
    if (!value) {
      return;
    }

    const updatePosition = () => {
      const el = optionRefs.current.get(value);

      if (el) {
        setStyle({
          left: el.offsetLeft,
          width: el.offsetWidth,
        });
      } else {
        setStyle(null);
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
  }, [value, containerRef, optionRefs]);

  return (
    <Component
      {...rest}
      style={{
        ...rest?.style,
        ...(style && {
          '--toggle-indicator-width': `${style.width}px`,
          '--toggle-indicator-translate-x': `${style.left}px`,
        }),
      }}
      className={classNames(
        'mosuk-toggle-indicator',
        styles.indicator,
        {
          [styles.hidden]: !value,
        },
        rest?.className,
      )}
    />
  );
}
