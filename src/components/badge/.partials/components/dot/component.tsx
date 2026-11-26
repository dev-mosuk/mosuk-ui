import type { BadgeDotProps } from '@/components/badge/.partials/components/dot/component.interface';
import {
  BADGE_DOT_DEFAULT_AS,
  BADGE_DOT_DEFAULT_PLACEMENT,
  BADGE_DOT_DEFAULT_PRESS,
  BADGE_DOT_DEFAULT_SIZE,
  BADGE_DOT_DEFAULT_VARIANT,
} from '@/components/badge/.partials/constants/component.constants';
import { BadgePress } from '@/components/badge/.partials/enums/component.enums';
import styles from '@/components/badge/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {type CSSProperties, type ElementType} from 'react';

export function BadgeDot<C extends ElementType = 'span'>({
  as,
  ref,
  size = BADGE_DOT_DEFAULT_SIZE,
  variant = BADGE_DOT_DEFAULT_VARIANT,
  press = BADGE_DOT_DEFAULT_PRESS,
  placement = BADGE_DOT_DEFAULT_PLACEMENT,
  style,
  className,
  onPointerDown,
  children,
  ...rest
}: BadgeDotProps<C>) {
  const Component = (as ?? BADGE_DOT_DEFAULT_AS) as ElementType;
  const pressMode = press === false ? BadgePress.None : press;
  const needsInlineSize = pressMode === BadgePress.Scale;

  return (
    <Component
      {...rest}
      ref={ref}
      data-variant={variant}
      data-size={size}
      data-press={pressMode}
      data-placement={placement}
      style={
        {
          '--badge-dot-size': size,
          ...style,
        } as CSSProperties
      }
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (needsInlineSize) {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            '--press-inline-size',
            `${rect.width}px`,
          );
        }

        onPointerDown?.(event as never);
      }}
      className={classNames('mosuk-badge-dot', styles.dot, className)}
    >
      {children}
    </Component>
  );
}
