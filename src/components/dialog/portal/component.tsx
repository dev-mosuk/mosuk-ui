import styles from '@/components/dialog/component.module.css';
import { DialogPortalProps } from '@/components/dialog/portal/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogPortal({ ...rest }: DialogPortalProps) {
  return (
    <BaseUIDialog.Portal
      {...rest}
      className={classNames(
        'mosuk-dialog-portal',
        '@container/dialog',
        'group/dialog',
        styles.portal,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Portal>
  );
}
