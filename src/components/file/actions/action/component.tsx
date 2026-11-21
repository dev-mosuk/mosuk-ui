import { FileActionsActionProps } from '@/components/file/actions/action/component.interface';
import { FileContext } from '@/components/file/component';
import styles from '@/components/file/component.module.css';
import classNames from 'classnames';
import React, { useContext } from 'react';

export function FileActionsAction({ ...props }: FileActionsActionProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileActionsAction должен использоваться только внутри компонента FileActions',
    );
  }

  return (
    <span {...props} className={classNames(styles.action, props?.className)}>
      {props?.children}
    </span>
  );
}
