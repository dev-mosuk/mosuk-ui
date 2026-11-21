import styles from '@/components/overlays/dialog/component.module.css';
import { DialogPortalViewportBackdropProps } from '@/components/overlays/dialog/portal/viewport/backdrop/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

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
