import { Toast } from '@/components/toast';
import type { ToastData } from '@/services/toasts';
import { ToastsService } from '@/services/toasts';
import { Toast as BaseUiToast } from '@base-ui/react/toast';
import classNames from 'classnames';
import React, {
  ReactElement,
  cloneElement,
  isValidElement,
} from 'react';

const useBaseUiToastManager = BaseUiToast.useToastManager;
const ToastType = ToastsService.ENUMS.Type;

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
        className: classNames(customContent.props.className),
      });
    }

    return <Toast.Item key={item.id} toast={item} />;
  });
}
