'use client';

import { ChatComposerTextareaProps } from '@/components/chat/.partials/components/composer-textarea/component.interface';
import {
  CHAT_COMPOSER_TEXTAREA_DEFAULT_MAX_ROWS,
  CHAT_COMPOSER_TEXTAREA_DEFAULT_MIN_ROWS,
} from '@/components/chat/.partials/constants/component.constants';
import { useChat } from '@/components/chat/.partials/hooks/hook';
import styles from '@/components/chat/.partials/styles/component.module.css';
import { Textarea } from '@/components/textarea';
import classNames from 'classnames';
import React, { type KeyboardEvent } from 'react';

export function ChatComposerTextarea({
  minRows = CHAT_COMPOSER_TEXTAREA_DEFAULT_MIN_ROWS,
  maxRows = CHAT_COMPOSER_TEXTAREA_DEFAULT_MAX_ROWS,
  isDisabled,
  isReadOnly,
  isRequired,
  className,
  onKeyDown,
  ...rest
}: ChatComposerTextareaProps) {
  const {
    value,
    setValue,
    submit,
    isDisabled: contextDisabled,
    canSubmit,
  } = useChat();

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(event);

    if (event.defaultPrevented) {
      return;
    }

    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();

      if (canSubmit) {
        submit();
      }
    }
  };

  return (
    <Textarea
      {...rest}
      isAutoSize
      size={0}
      minRows={minRows}
      maxRows={maxRows}
      value={value}
      isDisabled={isDisabled ?? contextDisabled}
      isReadOnly={isReadOnly}
      isRequired={isRequired}
      onChange={(event) => {
        setValue(event.target.value);
      }}
      onKeyDown={handleKeyDown}
      className={classNames(
        'mosuk-chat-composer-textarea',
        styles.textarea,
        className,
      )}
    />
  );
}
