import { FileActionsActionProps } from '@/components/display/file/component/actions/action/component.interface';
import { FileContext } from '@/components/display/file/component/component';
import styles from '@/components/display/file/component/component.module.css';
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
