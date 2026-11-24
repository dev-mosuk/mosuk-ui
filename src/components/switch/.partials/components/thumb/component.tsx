import { SwitchThumbProps } from '@/components/switch/.partials/components/thumb/component.interface';
import styles from '@/components/switch/.partials/styles/component.module.css';
import { Switch as BaseSwitch } from '@base-ui/react/switch';
import classNames from 'classnames';
import React from 'react';

export function SwitchThumb({ className, children, ...rest }: SwitchThumbProps) {
  return (
    <BaseSwitch.Thumb
      {...rest}
      className={classNames(
        'mosuk-switch-thumb',
        styles.thumb,
        className,
      )}
    >
      {children}
    </BaseSwitch.Thumb>
  );
}
