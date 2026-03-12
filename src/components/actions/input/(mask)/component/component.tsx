import classNames from 'classnames';
import React, { ElementType } from 'react';
import { IMaskInput } from 'react-imask';
import { Input } from '../../component/component';
import { InputMaskProps } from './component.interface';

export function InputMask<C extends ElementType = 'input'>({
  as,
  ...rest
}: InputMaskProps<C>) {
  const Component = (as || IMaskInput) as ElementType;

  return (
    <Input
      {...rest}
      as={Component}
      ref={rest?.ref}
      className={classNames('mosuk-input-mask', rest?.className)}
    >
      {rest?.children}
    </Input>
  );
}
