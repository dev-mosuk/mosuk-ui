import { FileActionsProps } from '@/components/display/file/actions/component.interface';
import { FileContext } from '@/components/display/file/component';
import styles from '@/components/display/file/component.module.css';
import classNames from 'classnames';
import React, { useContext } from 'react';

export function FileActions({ ...props }: FileActionsProps) {
  const context = useContext(FileContext);

  if (!context) {
    throw new Error(
      'FileActions должен использоваться только внутри компонента File',
    );
  }

  return (
    <div {...props} className={classNames(styles.actions, props?.className)}>
      {props?.children}
    </div>
  );
}
