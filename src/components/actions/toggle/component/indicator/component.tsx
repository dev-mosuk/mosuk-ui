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

  const { value, optionRefs } = useToggle();
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

    const observer = new ResizeObserver(updatePosition);
    observer.observe(el);

    const parent = el.offsetParent;

    if (parent) {
      observer.observe(parent);
    }

    return () => observer.disconnect();
  }, [value, optionRefs]);

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
