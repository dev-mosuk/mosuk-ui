import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { DialogPortalViewportProps } from './component.interface';

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
