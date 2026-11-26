import { Button } from '@/components/button';
import { ToastRoot } from '@/components/toast/.partials/components/component';
import type { ToastItemProps } from '@/components/toast/.partials/components/item/component.interface';
import {
  TOAST_DEFAULT_VARIANT,
  ToastTypeConstant,
} from '@/components/toast/.partials/constants/component.constants';
import styles from '@/components/toast/.partials/styles/component.module.css';
import { Typography } from '@/components/typography';
import { ToastsService } from '@/services/toasts';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React from 'react';

const ToastType = ToastsService.ENUMS.Type;
const useBaseUiToastManager = BaseUiToast.useToastManager;

function mapTypeToVariant(type: string) {
  switch (type) {
    case ToastType.PRIMARY:
      return Typography.ENUMS.Variant.Primary;
    case ToastType.SUCCESS:
      return Typography.ENUMS.Variant.Green;
    case ToastType.WARNING:
      return Typography.ENUMS.Variant.Orange;
    case ToastType.DANGER:
      return Typography.ENUMS.Variant.Red;
    case ToastType.DEFAULT:
    default:
      return Typography.ENUMS.Variant.Secondary;
  }
}

export function Item({ toast }: ToastItemProps) {
  const { close } = useBaseUiToastManager();
  const type =
    toast.type && toast.type in ToastTypeConstant
      ? (toast.type as keyof typeof ToastTypeConstant)
      : ToastType.DEFAULT;

  const action = toast.data?.action;
  const variant = toast.data?.variant ?? TOAST_DEFAULT_VARIANT;
  const icon = toast.data?.icon ?? ToastTypeConstant[type]?.icon;
  const actionVariant = action?.variant ?? Button.ENUMS.Variant.Primary;

  return (
    <ToastRoot toast={toast} data-type={type} data-variant={variant}>
      {icon ? <span className={styles.icon}>{icon}</span> : null}

      <div className={styles.content}>
        {toast.title ? (
          <Typography
            type={Typography.ENUMS.Type.P3}
            variant={mapTypeToVariant(type)}
          >
            {toast.title}
          </Typography>
        ) : null}

        {toast.description ? (
          <Typography
            type={Typography.ENUMS.Type.P4}
            variant={Typography.ENUMS.Variant.Tertiary}
          >
            {toast.description}
          </Typography>
        ) : null}
      </div>

      {action ? (
        <Button
          size={9}
          variant={actionVariant}
          className={classNames(
            actionVariant === Button.ENUMS.Variant.Primary && styles.action,
            action.className,
          )}
          onClick={action.onPress ?? (() => close(toast.id))}
        >
          {action.children}
        </Button>
      ) : null}
    </ToastRoot>
  );
}
