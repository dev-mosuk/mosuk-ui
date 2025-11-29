import classNames from 'classnames';
import React, { ElementType } from 'react';
import { SectionProps } from './component.interface';
import styles from './component.module.css';

export function Section<C extends ElementType = 'section'>({
  as,
  ...rest
}: SectionProps<C>) {
  const Component = (as || 'section') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames('mosuk-section', styles.section, rest?.className)}
    >
      {rest?.children}
    </Component>
  );
}
