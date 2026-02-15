import classNames from 'classnames';
import React, { ElementType, useContext, useEffect, useState } from 'react';
import styles from '../component.module.css';
import { ToggleContext } from '../provider/context/context';
import { ToggleIndicatorProps } from './component.props';

export function ToggleIndicator<C extends ElementType = 'div'>({
  as,
  ...rest
}: ToggleIndicatorProps<C>) {
  const Component = (as || 'div') as ElementType;
  const [style, setStyle] = useState<{ left: number; width: number } | null>(
    null,
  );

  const context = useContext(ToggleContext);

  if (!context) {
    throw new Error('ToggleIndicator must be used within ToggleProvider');
  }

  useEffect(() => {
    if (!context?.value || !context.optionRefs) {
      return;
    }

    const updatePosition = () => {
      const el = context.optionRefs.current.get(context.value);
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
    requestAnimationFrame(updatePosition);

    const el = context.optionRefs.current.get(context.value);
    if (!el) return;

    const observer = new ResizeObserver(updatePosition);
    observer.observe(el);

    const parent = el.offsetParent;
    if (parent) {
      observer.observe(parent);
    }

    return () => observer.disconnect();
  }, [context?.value, context?.optionRefs]);

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
        rest?.className,
      )}
    />
  );
}
