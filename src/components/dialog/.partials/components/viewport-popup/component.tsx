import { DialogViewportPopupProps } from '@/components/dialog/.partials/components/viewport-popup/component.interface';
import styles from '@/components/dialog/.partials/styles/component.module.css';
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
