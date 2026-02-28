import { DrawerPreview as BaseUiDrawer } from '@base-ui/react';
import classNames from 'classnames';
import React from 'react';
import styles from '../../component.module.css';
import { DrawerLeftPortalViewportProps } from './component.interface';

export function DrawerLeftPortalViewport({
  ...rest
}: DrawerLeftPortalViewportProps) {
  return (
    <BaseUiDrawer.Viewport
      {...rest}
      className={classNames(styles.viewport, rest?.className)}
    >
      {rest?.children}
    </BaseUiDrawer.Viewport>
  );
}
