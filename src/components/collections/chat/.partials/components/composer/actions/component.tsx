import { ChatComposerActionsProps } from '@/components/collections/chat/.partials/components/composer/actions/component.interface';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChatComposerActions({ ...rest }: ChatComposerActionsProps) {
  return (
    <div
      {...rest}
      className={classNames(
        'mosuk-chat-composer-actions',
        styles.actions,
        rest?.className,
      )}
    >
      {rest?.children}
    </div>
  );
}
