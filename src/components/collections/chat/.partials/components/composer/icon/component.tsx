'use client';

import { Icon } from '@/components/actions/icon';
import { ChatComposerIconProps } from '@/components/collections/chat/.partials/components/composer/icon/component.interface';
import { useChat } from '@/components/collections/chat/.partials/hooks/hook';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChatComposerIcon({ children, ...rest }: ChatComposerIconProps) {
  const { disabled } = useChat();

  return (
    <Icon
      type='button'
      {...rest}
      disabled={rest.disabled ?? disabled}
      className={classNames(
        'mosuk-chat-composer-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {children}
    </Icon>
  );
}
