import { SectionProps } from '@/components/section/.partials/components/component.interface';
import styles from '@/components/section/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Section<C extends ElementType = 'section'>({
  as,
  ref,
  ...rest
}: SectionProps<C>) {
  const Component = (as ?? 'section') as ElementType;

  return (
    <Component
      {...rest}
      ref={ref}
      className={classNames(
        'mosuk-section',
        '@container/section',
        'group/section',
        styles.section,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
