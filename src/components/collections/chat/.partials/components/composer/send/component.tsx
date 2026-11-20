'use client';

import { Icon } from '@/components/actions/icon';
import { ChatComposerSendProps } from '@/components/collections/chat/.partials/components/composer/send/component.interface';
import { useChat } from '@/components/collections/chat/.partials/hooks/hook';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import { ArrowUp } from 'lucide-react';
import React from 'react';

export function ChatComposerSend({ children, ...rest }: ChatComposerSendProps) {
  const { canSubmit, disabled, submit } = useChat();
  const isDisabled = (rest.disabled ?? disabled) || !canSubmit;

  return (
    <Icon
      type='submit'
      aria-label={rest['aria-label'] ?? 'Send message'}
      {...rest}
      disabled={isDisabled}
      onClick={(event) => {
        rest?.onClick?.(event);

        if (!event.defaultPrevented && event.currentTarget.type !== 'submit') {
          submit();
        }
      }}
      className={classNames(
        'mosuk-chat-composer-send',
        styles.send,
        rest?.className,
      )}
    >
      {children ?? <ArrowUp strokeWidth={2.25} />}
    </Icon>
  );
}
