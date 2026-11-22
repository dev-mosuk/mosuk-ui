import { DialogViewportBackdropProps } from '@/components/dialog/.partials/components/viewport-backdrop/component.interface';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogViewportBackdrop({
  ...rest
}: DialogViewportBackdropProps) {
  return (
    <BaseUIDialog.Backdrop
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-backdrop',
        styles.backdrop,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Backdrop>
  );
}
