import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../../component.module.css';
import { DialogPortalViewportPopupProps } from './component.interface';

export function DialogPortalViewportPopup({
  ...rest
}: DialogPortalViewportPopupProps) {
  return (
    <BaseUIDialog.Popup
      {...rest}
      className={classNames(
        'mosuk-dialog-portal-viewport-popup',
        styles.popup,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Popup>
  );
}
