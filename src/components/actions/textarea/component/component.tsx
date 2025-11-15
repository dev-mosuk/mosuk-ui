import React, { createContext } from 'react';
import { TextareaContextProps, TextareaProps } from './component.interface';
import styles from './component.module.css';

export const TextareaContext = createContext<TextareaContextProps | null>(null);

export function Textarea({ ...props }: TextareaProps) {
  return (
    <TextareaContext.Provider value={{}}>
      <fieldset
        {...props}
        className={`mosuk-textarea ${styles.fieldset ?? ''} ${
          props?.className ?? ''
        }`}
      >
        {props?.children}
      </fieldset>
    </TextareaContext.Provider>
  );
}
 