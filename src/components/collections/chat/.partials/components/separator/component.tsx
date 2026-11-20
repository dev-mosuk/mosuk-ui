import { ChatSeparatorProps } from '@/components/collections/chat/.partials/components/separator/component.interface';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChatSeparator({ ...rest }: ChatSeparatorProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-chat-separator',
        styles.separator,
        rest?.className,
      )}
    >
      <span className={styles.separatorLabel}>{rest?.children}</span>
    </div>
  );
}
