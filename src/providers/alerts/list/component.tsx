import { Toast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React, { cloneElement } from 'react';
import { Alert } from '../../../components/overlays/alert/component/component';
import { Hint } from '../../../components/texts/hint/component/component';
import { HintTypeEnum } from '../../../components/texts/hint/component/component.enums';
import styles from '../provider.module.css';

export function ToastList() {
  const { toasts } = Toast.useToastManager();

  return toasts.map((toast) => {
    if (toast.type === 'custom' && toast.data?.customContent) {
      return cloneElement(toast.data.customContent, {
        key: toast.id,
        toast: toast,
        className: classNames(toast.data.customContent.props?.className, styles.alert),
      });
    }

    return (
      <Alert key={toast.id} toast={toast} className={styles.alert}>
        <Hint
          type={
            toast.type === 'info'
              ? HintTypeEnum.INFO
              : toast.type === 'success'
              ? HintTypeEnum.SUCCESS
              : toast.type === 'warning'
              ? HintTypeEnum.WARNING
              : toast.type === 'error'
              ? HintTypeEnum.ERROR
              : HintTypeEnum.INFO
          }
          className={classNames(styles.hint)}
        >
          {toast.title}
        </Hint>
      </Alert>
    );
  });
}
