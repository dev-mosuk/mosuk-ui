import { DialogPortalViewportPopupCloseProps } from '@/components/dialog/portal/viewport/popup/close/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogPortalViewportPopupClose({
  ...rest
}: DialogPortalViewportPopupCloseProps) {
  return (
    <BaseUIDialog.Close
      {...rest}
      className={classNames('mosuk-dialog-close', rest?.className)}
    >
      {rest?.children}
    </BaseUIDialog.Close>
  );
}
