import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DialogPortalViewportBackdropProps } from './component.interface';

export function DialogPortalViewportBackdrop({
  ...rest
}: DialogPortalViewportBackdropProps) {
  return (
    <BaseUIDialog.Backdrop
      {...rest}
      className={classNames(
        'mosuk-dialog-portal-viewport-backdrop',
        styles.backdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Backdrop>
  );
}
