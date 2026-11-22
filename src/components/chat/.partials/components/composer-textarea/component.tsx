'use client';

import { ChatComposerTextareaProps } from '@/components/chat/.partials/components/composer-textarea/component.interface';
import { useChat } from '@/components/chat/.partials/hooks/hook';
import styles from '@/components/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useId, type ElementType, type KeyboardEvent } from 'react';
import TextareaAutosizePrimitive from 'react-textarea-autosize';

export function ChatComposerTextarea({
  minRows = 1,
  maxRows = 2,
  isDisabled,
  isReadOnly,
  isRequired,
  ...rest
}: ChatComposerTextareaProps) {
  const {
    value,
    setValue,
    submit,
    isDisabled: contextDisabled,
    canSubmit,
  } = useChat();
  const id = rest?.id ?? useId();
  const Component = TextareaAutosizePrimitive as ElementType;

  const handleKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    rest?.onKeyDown?.(event);

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
    <Component
      {...rest}
      id={id}
      value={value}
      disabled={isDisabled ?? contextDisabled}
      readOnly={isReadOnly}
      required={isRequired}
      minRows={minRows}
      maxRows={maxRows}
      onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(event.target.value);
      }}
      onKeyDown={handleKeyDown}
      className={classNames(
        'mosuk-chat-composer-textarea',
        styles.textarea,
        rest?.className,
      )}
    />
  );
}
