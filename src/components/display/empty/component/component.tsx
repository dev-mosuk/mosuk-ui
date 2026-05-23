import { EmptyProps } from '@/components/display/empty/component/component.interface';
import styles from '@/components/display/empty/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Empty<C extends ElementType = 'section'>({
  as,
  ...rest
}: EmptyProps<C>) {
  const Component = (as || 'section') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-empty', styles.empty, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
