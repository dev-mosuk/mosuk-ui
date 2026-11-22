import { EmptyProps } from '@/components/empty/.partials/components/component.interface';
import styles from '@/components/empty/.partials/styles/component.module.css';
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
      className={classNames(
        'mosuk-empty',
        '@container/empty',
        'group/empty',
        styles.empty,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
