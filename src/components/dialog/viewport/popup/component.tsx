import styles from '@/components/dialog/component.module.css';
import { DialogViewportPopupProps } from '@/components/dialog/viewport/popup/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogViewportPopup({ ...rest }: DialogViewportPopupProps) {
  return (
    <BaseUIDialog.Popup
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup',
        styles.popup,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Popup>
  );
}
