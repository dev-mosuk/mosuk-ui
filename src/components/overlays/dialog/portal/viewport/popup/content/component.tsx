import styles from '@/components/overlays/dialog/component.module.css';
import { DialogPortalViewportPopupContentProps } from '@/components/overlays/dialog/portal/viewport/popup/content/component.interface';
import classNames from 'classnames';
import React, { ElementType } from 'react';

export function DialogPortalViewportPopupContent<
  C extends ElementType = 'div',
>({ as, ...rest }: DialogPortalViewportPopupContentProps<C>) {
  const Component = (as || 'div') as ElementType;

  return (
    <Component
      {...rest}
      className={classNames(
        'mosuk-dialog-viewport-popup-content',
        styles.content,
        rest?.className,
      )}
    >
      {rest?.children}
    </Component>
  );
}
