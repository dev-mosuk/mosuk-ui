import classNames from 'classnames';
import React from 'react';
import { IMaskInput } from 'react-imask';
import { Input } from '../../component/component';
import { InputMaskProps } from './component.interface';

export function InputMask({ ...rest }: InputMaskProps) {
  return (
    <Input
      {...rest}
      as={IMaskInput}
      onChange={rest?.onChange}
      className={classNames('mosuk-input-mask', rest?.className)}
    />
  );
}
