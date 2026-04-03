import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './../component.module.css';
import { EmptyContentProps } from './component.interface';

export function EmptyContent<C extends ElementType = 'article'>({
  as,
  ...rest
}: EmptyContentProps<C>) {
  const Component = (as || 'article') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
