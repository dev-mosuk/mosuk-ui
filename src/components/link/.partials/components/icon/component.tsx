import type { LinkIconProps } from '@/components/link/.partials/components/icon/component.interface';
import { LINK_ICON_DEFAULT_AS } from '@/components/link/.partials/constants/component.constants';
import styles from '@/components/link/.partials/styles/component.module.css';
import classNames from 'classnames';
import { SquareArrowOutUpRight } from 'lucide-react';
import React, { type ElementType } from 'react';

export function LinkIcon<C = 'span'>({
  as,
  ref,
  style,
  className,
  children,
  ...rest
}: LinkIconProps<C>) {
  const Component = (as ?? LINK_ICON_DEFAULT_AS) as ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      aria-hidden='true'
      style={style}
      className={classNames('mosuk-link-icon', styles.icon, className)}
    >
      {children ?? <SquareArrowOutUpRight />}
    </Component>
  );
}
