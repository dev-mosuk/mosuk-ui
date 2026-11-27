import { ToastProps } from '@/components/toast/.partials/components/component.interface';
import {
  TOAST_ROOT_DEFAULT_IS_DISABLED,
  TOAST_ROOT_DEFAULT_IS_OPEN,
} from '@/components/toast/.partials/constants/component.constants';
import styles from '@/components/toast/.partials/styles/component.module.css';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React from 'react';

export function ToastRoot({
  toast,
  isOpen: _isOpen = TOAST_ROOT_DEFAULT_IS_OPEN,
  isDisabled = TOAST_ROOT_DEFAULT_IS_DISABLED,
  className,
  children,
  ...rest
}: ToastProps) {
  if (!toast) {
    return null;
  }

  return (
    <BaseUiToast.Root
      toast={toast}
      className={classNames(
        'mosuk-toast',
        'group/toast',
        styles.toast,
        className,
      )}
      aria-disabled={isDisabled || undefined}
      data-disabled={isDisabled || undefined}
      {...rest}
    >
      {children}
    </BaseUiToast.Root>
  );
}