import type { ActionProps } from '@/components/action/.partials/components/component.interface';
import {
  ACTION_DEFAULT_ANIMATION,
  ACTION_DEFAULT_IS_DISABLED,
  ACTION_DEFAULT_PRESS,
} from '@/components/action/.partials/constants/component.constants';
import { ActionPress } from '@/components/action/.partials/enums/component.enums';
import styles from '@/components/action/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Action<C extends ElementType = 'div'>({
  as,
  ref,
  animation = ACTION_DEFAULT_ANIMATION,
  press = ACTION_DEFAULT_PRESS,
  isDisabled = ACTION_DEFAULT_IS_DISABLED,
  className,
  style,
  onPointerDown,
  ...rest
}: ActionProps<C>) {
  const Component = (as ?? 'div') as ElementType;
  const pressMode = press === false ? ActionPress.None : press;
  const needsRippleCoords = pressMode === ActionPress.Ripple;
  const needsInlineSize = pressMode === ActionPress.Scale;
  const locked = Boolean(isDisabled);
  const isNativeButton = (as ?? 'div') === 'button';

  return (
    <Component
      {...rest}
      ref={ref}
      disabled={isNativeButton ? locked : undefined}
      aria-disabled={!isNativeButton && locked ? true : undefined}
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
      className={classNames(
        'mosuk-action',
        '@container/action',
        'group/action',
        styles.action,
        className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
