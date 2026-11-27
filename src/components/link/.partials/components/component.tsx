import type { LinkProps } from '@/components/link/.partials/components/component.interface';
import {
  LINK_DEFAULT_AS,
  LINK_DEFAULT_IS_DISABLED,
  LINK_DEFAULT_UNDERLINE,
  LINK_DEFAULT_VARIANT,
} from '@/components/link/.partials/constants/component.constants';
import styles from '@/components/link/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Link<C = 'a'>({
  as,
  ref,
  variant = LINK_DEFAULT_VARIANT,
  underline = LINK_DEFAULT_UNDERLINE,
  isDisabled = LINK_DEFAULT_IS_DISABLED,
  style,
  className,
  children,
  ...rest
}: LinkProps<C>) {
  const Component = (as ?? LINK_DEFAULT_AS) as ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      data-variant={variant}
      data-underline={underline}
      data-disabled={isDisabled || undefined}
      aria-disabled={isDisabled || undefined}
      {...(isDisabled ? { tabIndex: -1 } : null)}
      style={style}
      className={classNames('mosuk-link', 'group/link', styles.link, className)}
    >
      {children}
    </Component>
  );
}
