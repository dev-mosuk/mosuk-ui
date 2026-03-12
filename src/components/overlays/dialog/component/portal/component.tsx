import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../component.module.css';
import { DialogPortalProps } from './component.interface';

export function DialogPortal({ ...rest }: DialogPortalProps) {
  return (
    <BaseUIDialog.Portal
      {...rest}
      className={classNames(
        'mosuk-dialog-portal',
        styles.portal,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Portal>
  );
}
