import classNames from 'classnames';
import { Info } from 'lucide-react';
import React, { useContext } from 'react';
import { InputContext } from '../component';
import styles from '../component.module.css';
import { InputHintTypeIcon } from './component.constants';
import { InputHintType } from './component.enums';
import { InputHintProps } from './component.interface';

export function InputHint({ type, ...rest }: InputHintProps) {
  const context = useContext(InputContext);

  if (!context) {
    throw new Error('Input.Hint must be used within an Input component.');
  }

  const Icon = type ? InputHintTypeIcon[type] : Info;

  return (
    rest?.children && (
      <p
        {...rest}
        className={classNames(classNames('mosuk-input-hint', styles.hint, {
          [styles[type ?? InputHintType.INFO]]: type,
        }), rest?.className)}
      >
        <Icon />
        {rest?.children}
      </p >
    )
  );
}
