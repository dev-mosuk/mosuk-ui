import type { ButtonProps } from '@/components/button/.partials/components/component.interface';
import {
  BUTTON_DEFAULT_ANIMATION,
  BUTTON_DEFAULT_AS,
  BUTTON_DEFAULT_FORMAT,
  BUTTON_DEFAULT_IS_ACTIVE,
  BUTTON_DEFAULT_IS_LOADING,
  BUTTON_DEFAULT_PRESS,
  BUTTON_DEFAULT_SIZE,
  BUTTON_DEFAULT_TYPE,
  BUTTON_DEFAULT_VARIANT,
} from '@/components/button/.partials/constants/component.constants';
import { ButtonPress } from '@/components/button/.partials/enums/component.enums';
import styles from '@/components/button/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function Button<C = 'button'>({
  as,
  size = BUTTON_DEFAULT_SIZE,
  format = BUTTON_DEFAULT_FORMAT,
  variant = BUTTON_DEFAULT_VARIANT,
  animation = BUTTON_DEFAULT_ANIMATION,
  press = BUTTON_DEFAULT_PRESS,
  type = BUTTON_DEFAULT_TYPE,
  isDisabled,
  isLoading = BUTTON_DEFAULT_IS_LOADING,
  isActive = BUTTON_DEFAULT_IS_ACTIVE,
  className,
  style,
  onPointerDown,
  ...rest
}: ButtonProps<C>) {
  const { 'data-active': dataActiveAttr, ...domRest } = rest as typeof rest & {
    'data-active'?: string | boolean;
  };

  const Component = (as ?? BUTTON_DEFAULT_AS) as ElementType;
  const pressMode = press === false ? ButtonPress.None : press;
  const needsRippleCoords = pressMode === ButtonPress.Ripple;
  const needsInlineSize = pressMode === ButtonPress.Scale;
  const locked = Boolean(isDisabled || isLoading);
  const isNativeButton = (as ?? BUTTON_DEFAULT_AS) === BUTTON_DEFAULT_AS;
  const hasDataActive =
    isActive || (dataActiveAttr !== undefined && dataActiveAttr !== false);

  return (
    <Component
      {...domRest}
      type={isNativeButton ? (type as string | undefined) : undefined}
      disabled={isNativeButton ? locked : undefined}
      aria-disabled={!isNativeButton && locked ? true : undefined}
      data-variant={variant}
      data-size={size}
      data-format={format}
      data-disabled={isDisabled || undefined}
      data-loading={isLoading || undefined}
      data-active={hasDataActive ? true : undefined}
      data-press={pressMode}
      data-animation={animation}
      style={
        {
          '--button-size': size,
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
        'mosuk-button',
        'group/button',
        styles.button,
        className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
