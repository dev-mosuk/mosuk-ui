import styles from '@/components/overlays/dialog/component/component.module.css';
import { DialogPortalViewportProps } from '@/components/overlays/dialog/component/portal/viewport/component.interface';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogPortalViewport({ ...rest }: DialogPortalViewportProps) {
  return (
    <BaseUIDialog.Viewport
      {...rest}
      className={classNames(
        'mosuk-dialog-portal-viewport',
        styles.viewport,
        rest?.className,
      )}
    >
      {rest?.children}
    </BaseUIDialog.Viewport>
  );
}
