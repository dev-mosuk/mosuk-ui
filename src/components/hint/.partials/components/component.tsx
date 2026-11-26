import type { HintProps } from '@/components/hint/.partials/components/component.interface';
import {
  HINT_DEFAULT_ANIMATION,
  HINT_DEFAULT_COLOR,
  HINT_DEFAULT_PRESS,
} from '@/components/hint/.partials/constants/component.constants';
import { HintPress } from '@/components/hint/.partials/enums/component.enums';
import styles from '@/components/hint/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Hint<C extends ElementType = 'p'>({
  as,
  ref,
  color = HINT_DEFAULT_COLOR,
  animation = HINT_DEFAULT_ANIMATION,
  press = HINT_DEFAULT_PRESS,
  onPointerDown,
  className,
  ...rest
}: HintProps<C>) {
  const Component = (as || 'p') as ElementType;
  const pressMode = press === false ? HintPress.None : press;
  const needsRippleCoords = pressMode === HintPress.Ripple;
  const needsInlineSize = pressMode === HintPress.Scale;

  return (
    <Component
      {...rest}
      ref={ref}
      data-color={color}
      data-animation={animation}
      data-press={pressMode}
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (needsRippleCoords || needsInlineSize) {
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
      className={classNames(
        'mosuk-hint',
        '@container/hint',
        'group/hint',
        styles.hint,
        className,
      )}
    />
  );
}
