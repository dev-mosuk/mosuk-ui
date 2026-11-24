import { DialogViewportPopupProps } from '@/components/dialog/.partials/components/viewport-popup/component.interface';
import { DIALOG_DEFAULT_VARIANT } from '@/components/dialog/.partials/constants/component.constants';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogViewportPopup({
  variant = DIALOG_DEFAULT_VARIANT,
  ...rest
}: DialogViewportPopupProps) {
  return (
    <BaseUIDialog.Popup
      {...rest}
      data-variant={variant}
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
