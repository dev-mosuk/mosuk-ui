import { Toast } from '@/components/toast';
import { ToastTypeConstant } from '@/providers/toasts/.partials/components/list/component.constants';
import styles from '@/providers/toasts/.partials/styles/styles.module.css';
import { ToastType } from '@/services/toasts/service.enums';
import { ToastData } from '@/services/toasts/service.interface';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React, {
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

const useBaseUiToastManager = BaseUiToast.useToastManager;

export function ToastList() {
  const { toasts } = useBaseUiToastManager<ToastData>();

  return toasts.map((item) => {
    if (item.type === ToastType.CUSTOM && isValidElement(item.data?.customContent)) {
      const customContent = item.data.customContent as ReactElement<{
        className?: string;
        toast?: typeof item;
      }>;

      return cloneElement(customContent, {
        key: item.id,
        toast: item,
        className: classNames(customContent.props.className, styles.toast),
      });
    }

    const type =
      item.type && item.type in ToastTypeConstant
        ? (item.type as keyof typeof ToastTypeConstant)
        : ToastType.DEFAULT;
    const actionProps = item.data?.actionProps;
    const Indicator = item.data?.indicator ?? ToastTypeConstant[type]?.icon;

    return (
      <Toast
        key={item.id}
        toast={item}
        data-type={type}
        className={classNames(styles.toast)}
      >
        {Indicator ? (
          <span className={styles.indicator}>
            <Indicator className={styles.icon} strokeWidth={1.25} />
          </span>
        ) : null}

        <div className={styles.content}>
          {item.title ? (
            <div className={styles.title}>{item.title}</div>
          ) : null}

          {item.description ? (
            <div className={styles.description}>{item.description}</div>
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
      </Toast>
    );
  });
}
