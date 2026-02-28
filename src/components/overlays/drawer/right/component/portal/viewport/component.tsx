import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { DrawerRightPortalViewportProps } from './component.interface';

export function DrawerRightPortalViewport({
  ...rest
}: DrawerRightPortalViewportProps) {
  return (
    <BaseUiDrawer.Viewport
      {...rest}
      className={classNames(styles.viewport, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Viewport>
  );
}
