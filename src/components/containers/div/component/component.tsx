import { DivProps } from '@/components/containers/div/component/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function Div<C extends ElementType = 'div'>({
  as,
  ...rest
}: DivProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component {...rest} className={classNames('mosuk-div', rest?.className)}>
      {rest?.children}
    </Component>
  );
}
