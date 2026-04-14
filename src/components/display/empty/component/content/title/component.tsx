import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './../../component.module.css';
import { EmptyContentTitleProps } from './component.interface';

export function EmptyContentTitle<C extends ElementType = 'h3'>({
  as,
  ...rest
}: EmptyContentTitleProps<C>) {
  const Component = (as || 'h3') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-content-title',
        styles.title,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
