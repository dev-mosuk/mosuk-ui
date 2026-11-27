import type { CardProps } from '@/components/card/.partials/components/component.interface';
import {
  CARD_DEFAULT_ANIMATION,
  CARD_DEFAULT_PRESS,
  CARD_DEFAULT_VARIANT,
} from '@/components/card/.partials/constants/component.constants';
import { CardPress } from '@/components/card/.partials/enums/component.enums';
import styles from '@/components/card/.partials/styles/style.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Card<C = 'div'>({
  as,
  variant = CARD_DEFAULT_VARIANT,
  animation = CARD_DEFAULT_ANIMATION,
  press = CARD_DEFAULT_PRESS,
  isDisabled,
  className,
  style,
  onPointerDown,
  ...rest
}: CardProps<C>) {
  const Component = (as ?? 'div') as ElementType;
  const pressMode = press === false ? CardPress.None : press;
  const needsRippleCoords = pressMode === CardPress.Ripple;
  const needsInlineSize = pressMode === CardPress.Scale;
  const locked = Boolean(isDisabled);
  const isNativeButton = (as ?? 'div') === 'button';

  return (
    <Component
      {...rest}
      disabled={isNativeButton ? locked : undefined}
      aria-disabled={!isNativeButton && locked ? true : undefined}
      data-variant={variant}
      data-animation={animation}
      data-press={pressMode}
      data-disabled={locked || undefined}
      style={style}
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if ((needsRippleCoords || needsInlineSize) && !locked) {
          const rect = event.currentTarget.getBoundingClientRect();

          if (needsInlineSize) {
            event.currentTarget.style.setProperty(
              '--press-inline-size',
              `${rect.width}px`,
            );
          }

          if (needsRippleCoords) {
            event.currentTarget.style.setProperty(
              '--press-x',
              `${event.clientX - rect.left}px`,
            );
            event.currentTarget.style.setProperty(
              '--press-y',
              `${event.clientY - rect.top}px`,
            );
          }
        }

        onPointerDown?.(event as never);
      }}
      className={classNames('mosuk-card', 'group/card', styles.card, className)}
    >
      {rest?.children}
    </Component>
  );
}
