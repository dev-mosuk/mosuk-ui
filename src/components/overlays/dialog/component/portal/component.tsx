import styles from '@/components/overlays/dialog/component/component.module.css';
import { DialogPortalProps } from '@/components/overlays/dialog/component/portal/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

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
