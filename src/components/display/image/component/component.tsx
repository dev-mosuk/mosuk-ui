import classNames from 'classnames';
import React, { ElementType } from 'react';
import {
  ImageProps
} from './component.interface';
import styles from './component.module.css';

export function Image<C extends ElementType = 'div'>({
  as,
  ...rest
}: ImageProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-image', styles.container, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
