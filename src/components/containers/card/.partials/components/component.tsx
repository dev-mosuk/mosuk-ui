import { CardComponentProps } from '@/components/containers/card/.partials/components/component.interface';
import styles from '@/components/containers/card/.partials/styles/style.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export default function CardComponent<C extends ElementType = 'div'>({
  as,
  ref,
  ...rest
}: CardComponentProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        '@container/card',
        'group/card',
        styles.card,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
