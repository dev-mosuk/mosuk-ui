import { InputMaskProps } from '@/components/actions/input/(mask)/component/component.interface';
import { Input } from '@/components/actions/input/component/component';
import classNames from 'classnames';
import React, { ElementType } from 'react';
import { IMaskInput } from 'react-imask';

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
