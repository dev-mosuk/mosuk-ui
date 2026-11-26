'use client';

import type { FileProps } from '@/components/file/.partials/components/component.interface';
import {
  FILE_DEFAULT_ANIMATION,
  FILE_DEFAULT_PRESS,
  FILE_DEFAULT_SIZE,
  FILE_DEFAULT_VARIANT,
} from '@/components/file/.partials/constants/component.constants';
import { FilePress } from '@/components/file/.partials/enums/component.enums';
import { FileProvider } from '@/components/file/.partials/providers/provider';
import styles from '@/components/file/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function File<C = 'div'>({
  as,
  ref,
  size = FILE_DEFAULT_SIZE,
  variant = FILE_DEFAULT_VARIANT,
  animation = FILE_DEFAULT_ANIMATION,
  press = FILE_DEFAULT_PRESS,
  isDisabled,
  name,
  extension,
  className,
  style,
  onPointerDown,
  ...rest
}: FileProps<C>) {
  const Component = (as ?? 'div') as ElementType;
  const pressMode = press === false ? FilePress.None : press;
  const needsRippleCoords = pressMode === FilePress.Ripple;
  const needsInlineSize = pressMode === FilePress.Scale;
  const locked = Boolean(isDisabled);
  const isNativeButton = (as ?? 'div') === 'button';

  return (
    <FileProvider name={name} extension={extension}>
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
            '--file-size': size,
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
          'mosuk-file',
          '@container/file',
          'group/file',
          styles.file,
          className,
        )}
      >
        {rest?.children}
      </Component>
    </FileProvider>
  );
}
