'use client';

import { ChatComposerProps } from '@/components/chat/.partials/components/composer/component.interface';
import {
  CHAT_COMPOSER_DEFAULT_IS_DISABLED,
  CHAT_COMPOSER_DEFAULT_VALUE,
} from '@/components/chat/.partials/constants/component.constants';
import { ChatProvider } from '@/components/chat/.partials/providers/provider';
import styles from '@/components/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

export function ChatComposer({
  value: controlledValue,
  defaultValue = CHAT_COMPOSER_DEFAULT_VALUE,
  onValueChange,
  onSubmit,
  isDisabled = CHAT_COMPOSER_DEFAULT_IS_DISABLED,
  children,
  ...rest
}: ChatComposerProps) {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue);
  const [focused, setFocused] = useState(false);
  const isControlled = controlledValue !== undefined;
  const value = isControlled ? controlledValue : uncontrolledValue;

  const setValue = useCallback(
    (next: string) => {
      if (!isControlled) {
        setUncontrolledValue(next);
      }

      onValueChange?.(next);
    },
    [isControlled, onValueChange],
  );

  const canSubmit = value.trim().length > 0 && !isDisabled;
  const expanded = focused || value.trim().length > 0;

  const submit = useCallback(() => {
    const next = value.trim();

    if (!next || isDisabled) {
      return;
    }

    onSubmit?.(next);

    if (!isControlled) {
      setUncontrolledValue('');
    }
  }, [isDisabled, isControlled, onSubmit, value]);

  return (
    <ChatProvider
      value={value}
      setValue={setValue}
      submit={submit}
      isDisabled={isDisabled}
      canSubmit={canSubmit}
    >
      <form
        {...rest}
        data-expanded={expanded ? 'true' : undefined}
        onFocus={(event) => {
          rest?.onFocus?.(event);
          setFocused(true);
        }}
        onBlur={(event) => {
          rest?.onBlur?.(event);

          const next = event.relatedTarget as Node | null;

          if (!event.currentTarget.contains(next)) {
            setFocused(false);
          }
        }}
        onSubmit={(event) => {
          event.preventDefault();
          submit();
        }}
        className={classNames(
          'mosuk-chat-composer',
          '@container/chat-composer',
          'group/chat-composer',
          styles.composer,
          rest?.className,
        )}
      >
        {children}
      </form>
    </ChatProvider>
  );
}
