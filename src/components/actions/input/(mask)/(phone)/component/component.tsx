import { InputMask } from '@/components/actions/input/(mask)/component/component';
import { InputMaskProps } from '@/components/actions/input/(mask)/component/component.interface';
import React from 'react';

export function InputMaskPhone({ ...props }: InputMaskProps) {
  return (
    <InputMask
      {...props}
      type='tel'
      mask={'+7 (900) 000-00-00' as any} // TODO: fix any type
      definitions={{
        '0': /[0-9]/,
      }}
      prepare={(value: string, masked: any) => {
        if (value.startsWith('8') && !masked.value) {
          return '+7' + value.substring(1);
        }

        return value;
      }}
      placeholder={props?.placeholder ?? '+7 (999) 999-99-99'}
    />
  );
}
