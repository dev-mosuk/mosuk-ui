import type { ButtonProps } from '@/components/button/.partials/components/component.interface';
import {
  BUTTON_DEFAULT_PRESS,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_VARIANT,
  BUTTON_DEFAULT_WIDTH,
} from '@/components/button/.partials/constants/component.constants';
import { ButtonPress } from '@/components/button/.partials/enums/component.enums';
import styles from '@/components/button/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function Button<C = 'button'>({
  as,
  variant = BUTTON_DEFAULT_VARIANT,
  size = BUTTON_DEFAULT_SIZE,
  isPending = false,
  isLoading = false,
  width = BUTTON_DEFAULT_WIDTH,
  press = BUTTON_DEFAULT_PRESS,
  isDisabled,
  className,
  style,
  onPointerDown,
  type,
  ...rest
}: ButtonProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  const pressMode = press === false ? ButtonPress.None : press;
  const needsRippleCoords =
    pressMode === ButtonPress.Ripple || pressMode === ButtonPress.ScaleRipple;
  const locked = Boolean(isDisabled || isPending || isLoading);
  const isNativeButton = (as ?? 'button') === 'button';

  return (
    <Component
      {...rest}
      type={
        isNativeButton ? ((type as string | undefined) ?? 'button') : undefined
      }
      disabled={isNativeButton ? locked : undefined}
      aria-disabled={!isNativeButton && locked ? true : undefined}
      data-variant={variant}
      data-size={size}
      data-pending={isPending || undefined}
      data-loading={isLoading || undefined}
      data-width={width}
      data-press={pressMode}
      style={
        {
          '--button-size': size,
          ...style,
        } as CSSProperties
      }
      onPointerDown={(event: React.PointerEvent<HTMLElement>) => {
        if (needsRippleCoords) {
          const rect = event.currentTarget.getBoundingClientRect();
          event.currentTarget.style.setProperty(
            '--press-x',
            `${event.clientX - rect.left}px`,
          );
          event.currentTarget.style.setProperty(
            '--press-y',
            `${event.clientY - rect.top}px`,
          );
        }

        onPointerDown?.(event as never);
      }}
      className={classNames(
        'mosuk-button',
        '@container/button',
        'group/button',
        styles.button,
        className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
