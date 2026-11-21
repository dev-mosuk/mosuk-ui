import type { IconProps } from '@/components/icon/.partials/components/component.interface';
import {
  ICON_DEFAULT_PRESS,
  ICON_DEFAULT_SIZE,
  ICON_DEFAULT_VARIANT,
} from '@/components/icon/.partials/constants/component.constants';
import { IconPress } from '@/components/icon/.partials/enums/component.enums';
import styles from '@/components/icon/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function Icon<C = 'button'>({
  as,
  variant = ICON_DEFAULT_VARIANT,
  size = ICON_DEFAULT_SIZE,
  isPending = false,
  isLoading = false,
  press = ICON_DEFAULT_PRESS,
  isDisabled,
  className,
  style,
  onPointerDown,
  type,
  ...rest
}: IconProps<C>) {
  const Component = (as ?? 'button') as ElementType;
  const pressMode = press === false ? IconPress.None : press;
  const needsRippleCoords =
    pressMode === IconPress.Ripple || pressMode === IconPress.ScaleRipple;
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
      data-press={pressMode}
      style={
        {
          '--icon-size': size,
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
        'mosuk-icon',
        '@container/icon',
        'group/icon',
        styles.root,
        className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
