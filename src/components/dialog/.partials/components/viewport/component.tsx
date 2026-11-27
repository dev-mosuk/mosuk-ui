import { DialogViewportProps } from '@/components/dialog/.partials/components/viewport/component.interface';
import { useDialog } from '@/components/dialog/.partials/hooks/hook';
import styles from '@/components/dialog/.partials/styles/component.module.css';
import { Dialog as BaseUIDialog } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';

export function DialogViewport({ ...rest }: DialogViewportProps) {
  const { keepMounted, container } = useDialog();

  return (
    <BaseUIDialog.Portal
      keepMounted={keepMounted}
      container={container}
      className={classNames(
        'mosuk-dialog',
        'group/dialog',
        styles.portal,
      )}
    >
      <BaseUIDialog.Viewport
        {...rest}
        className={classNames(
          'mosuk-dialog-viewport',
          styles.viewport,
          rest?.className,
        )}
      >
        {rest?.children}
      </BaseUIDialog.Viewport>
    </BaseUIDialog.Portal>
  );
}
