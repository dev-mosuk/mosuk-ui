import classNames from 'classnames';
import React, { useContext } from 'react';
import { FileContext } from '../../component';
import styles from '../../component.module.css';
import { FileActionsActionProps } from './component.interface';

export function FileActionsAction({ ...props }: FileActionsActionProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileActionsAction должен использоваться только внутри компонента FileActions'
    );
  }

  return (
    <span {...props} className={classNames(styles.action, props?.className)}>
      {props?.children}
    </span>
  );
}
