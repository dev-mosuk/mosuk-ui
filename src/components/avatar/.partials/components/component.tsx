'use client';

import type { AvatarProps } from '@/components/avatar/.partials/components/component.interface';
import {
  AVATAR_DEFAULT_ANIMATION,
  AVATAR_DEFAULT_PRESS,
  AVATAR_DEFAULT_SIZE,
  AVATAR_DEFAULT_VARIANT,
} from '@/components/avatar/.partials/constants/component.constants';
import { AvatarPress } from '@/components/avatar/.partials/enums/component.enums';
import { AvatarProvider } from '@/components/avatar/.partials/providers/provider';
import styles from '@/components/avatar/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function Avatar<C = 'div'>({
  as,
  ref,
  size = AVATAR_DEFAULT_SIZE,
  variant = AVATAR_DEFAULT_VARIANT,
  animation = AVATAR_DEFAULT_ANIMATION,
  press = AVATAR_DEFAULT_PRESS,
  isDisabled,
  className,
  style,
  onPointerDown,
  ...rest
}: AvatarProps<C>) {
  const Component = (as ?? 'div') as ElementType;
  const pressMode = press === false ? AvatarPress.None : press;
  const needsRippleCoords = pressMode === AvatarPress.Ripple;
  const needsInlineSize = pressMode === AvatarPress.Scale;
  const locked = Boolean(isDisabled);
  const isNativeButton = (as ?? 'div') === 'button';

  return (
    <AvatarProvider>
      <Component
        {...rest}
        ref={ref}
        disabled={isNativeButton ? locked : undefined}
        aria-disabled={!isNativeButton && locked ? true : undefined}
        data-variant={variant}
        data-size={size}
        data-animation={animation}
        data-press={pressMode}
        data-disabled={locked || undefined}
        style={
          {
            '--avatar-size': size,
            ...style,
          } as CSSProperties
        }
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
          'mosuk-avatar',
          'group/avatar',
          styles.avatar,
          className,
        )}
      >
        {rest?.children}
      </Component>
    </AvatarProvider>
  );
}
