import type { ObserverProps } from '@/components/observer/.partials/components/component.interface';
import styles from '@/components/observer/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Observer<C extends ElementType = 'aside'>({
  as,
  ...rest
}: ObserverProps<C>) {
  const Component = (as || 'aside') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-observer',
        '@container/observer',
        'group/observer',
        styles.observer,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
