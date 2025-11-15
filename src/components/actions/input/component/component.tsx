import React, { createContext } from 'react';
import { InputContextProps, InputProps } from './component.interface';
import styles from './component.module.css';

export const InputContext = createContext<InputContextProps | null>(null);

export function Input({ ...props }: InputProps) {
  return (
    <InputContext.Provider value={{}}>
      <fieldset
        {...props}
        className={'mosuk-input' + ' ' + (styles.fieldset ?? '') + ' ' + (props?.className ?? '')}
      >
        {props?.children}
      </fieldset>
    </InputContext.Provider>
  );
}
