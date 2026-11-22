'use client';

import type { AvatarProps } from '@/components/avatar/.partials/components/component.interface';
import {
  AVATAR_DEFAULT_SIZE,
  AVATAR_DEFAULT_VARIANT,
} from '@/components/avatar/.partials/constants/component.constants';
import { AvatarProvider } from '@/components/avatar/.partials/providers/provider';
import styles from '@/components/avatar/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type CSSProperties, type ElementType } from 'react';

export function Avatar<C = 'div'>({
  as,
  ref,
  size = AVATAR_DEFAULT_SIZE,
  variant = AVATAR_DEFAULT_VARIANT,
  className,
  style,
  ...rest
}: AvatarProps<C>) {
  const Component = (as ?? 'div') as ElementType;

  return (
    <AvatarProvider>
      <Component
        {...rest}
        ref={ref}
        data-variant={variant}
        data-size={size}
        style={
          {
            '--avatar-size': size,
            ...style,
          } as CSSProperties
        }
        className={classNames(
          'mosuk-avatar',
          '@container/avatar',
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
