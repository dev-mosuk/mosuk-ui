import styles from '@/components/actions/select/component/component.module.css';
import { SelectOptionProps } from '@/components/actions/select/component/option/component.props';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function SelectOption<C extends ElementType = 'option'>({
  as,
  ...rest
}: SelectOptionProps<C>) {
  const Component = (as || 'option') as ElementType;

  return (
    <Component
      {...rest}
      ref={rest?.ref}
      className={classNames(
        'mosuk-select-option',
        styles.option,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
