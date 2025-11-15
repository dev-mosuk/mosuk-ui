import classNames from 'classnames';
import React, { useContext } from 'react';
import { FileContext } from '../component';
import styles from '../component.module.css';
import { FileActionsProps } from './component.interface';

export function FileActions({ ...props }: FileActionsProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileActions должен использоваться только внутри компонента File'
    );
  }

  return (
    <div {...props} className={classNames(styles.actions, props?.className)}>
      {props?.children}
    </div>
  );
}
