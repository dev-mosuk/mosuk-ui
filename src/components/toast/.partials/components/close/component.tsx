import { CloseProps } from '@/components/toast/.partials/components/close/component.interface';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React, { type ElementType } from 'react';

export function Close<C = 'button'>({
  as,
  ref,
  isDisabled,
  className,
  children,
  ...rest
}: CloseProps<C>) {
  // 0. Подготовка
  const Component = (as ?? 'button') as ElementType;
  const nativeButton = as == null || as === 'button' || typeof as !== 'string';

  // 1. Рендер
  return (
    <BaseUiToast.Close
      {...rest}
      disabled={isDisabled}
      nativeButton={nativeButton}
      className={classNames('mosuk-toast-close', className)}
      render={<Component ref={ref} />}
    >
      {children}
    </BaseUiToast.Close>
  );
}
