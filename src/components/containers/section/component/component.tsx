import { SectionProps } from '@/components/containers/section/component/component.interface';
import styles from '@/components/containers/section/component/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

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
