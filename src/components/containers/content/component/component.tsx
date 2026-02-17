import classNames from 'classnames';
import React, { ElementType } from 'react';
import { ContentProps } from './component.interface';
import styles from './component.module.css';

export function Content<C extends ElementType = 'div'>({
  as,
  ...rest
}: ContentProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-content', styles.content, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
