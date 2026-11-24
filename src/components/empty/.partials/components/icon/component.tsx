import type { EmptyIconProps } from '@/components/empty/.partials/components/icon/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { Children, cloneElement, isValidElement } from 'react';

export function EmptyIcon({ className, children, ...rest }: EmptyIconProps) {
  const child = Children.only(children);

  if (!isValidElement(child)) {
    return null;
  }

  return cloneElement(child, {
    ...rest,
    className: classNames(
      'mosuk-empty-icon',
      styles.icon,
      child.props.className,
      className,
    ),
  });
}
