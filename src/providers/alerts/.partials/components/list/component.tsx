import { Alert } from '@/components/overlays/alert/component';
import { AlertTypeConstant } from '@/providers/alerts/.partials/components/list/component.constants';
import styles from '@/providers/alerts/.partials/styles/styles.module.css';
import { AlertType } from '@/services/alerts/service.enums';
import { AlertData } from '@/services/alerts/service.interface';
import { Toast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React, {
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

export function ToastList() {
  const { toasts } = Toast.useToastManager<AlertData>();

  return toasts.map((toast) => {
    if (toast.type === AlertType.CUSTOM && isValidElement(toast.data?.customContent)) {
      const customContent = toast.data.customContent as ReactElement<{
        className?: string;
        toast?: typeof toast;
      }>;

      return cloneElement(customContent, {
        key: toast.id,
        toast,
        className: classNames(customContent.props.className, styles.alert),
      });
    }

    const type =
      toast.type && toast.type in AlertTypeConstant
        ? (toast.type as keyof typeof AlertTypeConstant)
        : AlertType.DEFAULT;
    const actionProps = toast.data?.actionProps;
    const Indicator = toast.data?.indicator ?? AlertTypeConstant[type]?.icon;

    return (
      <Alert
        key={toast.id}
        toast={toast}
        data-type={type}
        className={classNames(styles.alert)}
      >
        {Indicator ? (
          <span className={styles.indicator}>
            <Indicator className={styles.icon} strokeWidth={1.25} />
          </span>
        ) : null}

        <div className={styles.content}>
          {toast.title ? (
            <div className={styles.title}>{toast.title}</div>
          ) : null}

          {toast.description ? (
            <div className={styles.description}>{toast.description}</div>
          ) : null}
        </div>

        {actionProps ? (
          <button
            type="button"
            className={classNames(styles.action, actionProps.className)}
            onClick={actionProps.onPress}
          >
            {actionProps.children}
          </button>
        ) : null}
      </Alert>
    );
  });
}
