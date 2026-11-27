import type { BadgeProps } from '@/components/badge/.partials/components/component.interface';
import { BADGE_DEFAULT_AS } from '@/components/badge/.partials/constants/component.constants';
import styles from '@/components/badge/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, {type ElementType} from 'react';

export function Badge<C extends ElementType = 'span'>({
  as,
  ref,
  style,
  className,
  children,
  ...rest
}: BadgeProps<C>) {
  const Component = (as ?? BADGE_DEFAULT_AS) as ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      style={style}
      className={classNames(
        'mosuk-badge',
        'group/badge',
        styles.badge,
        className,
      )}
    >
      {children}
    </Component>
  );
}
