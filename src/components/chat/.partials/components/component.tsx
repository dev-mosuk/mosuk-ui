import { ChatProps } from '@/components/chat/.partials/components/component.interface';
import styles from '@/components/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function Chat({ className, children, ...rest }: ChatProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-chat',
        'group/chat',
        styles.chat,
        className,
      )}
    >
      {children}
    </div>
  );
}
