import classNames from 'classnames';
import React, { ElementType } from 'react';
import styles from './../../component.module.css';
import { EmptyContentDescriptionProps } from './component.interface';

export function EmptyContentDescription<C extends ElementType = 'p'>({
  as,
  ...rest
}: EmptyContentDescriptionProps<C>) {
  const Component = (as || 'p') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-empty-content-description',
        styles.description,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
