import styles from '@/components/dialog/component.module.css';
import { DialogViewportProps } from '@/components/dialog/viewport/component.interface';
import { useDialog } from '@/components/dialog/.partials/hooks/hook';
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
        '@container/dialog',
        'group/dialog',
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
