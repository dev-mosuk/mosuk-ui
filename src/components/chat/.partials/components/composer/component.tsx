'use client';

import { ChatComposerProps } from '@/components/chat/.partials/components/composer/component.interface';
import { ChatProvider } from '@/components/chat/.partials/providers/provider';
import styles from '@/components/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React, { useCallback, useState } from 'react';

export function ChatComposer({
  value: controlledValue,
  defaultValue = '',
  onValueChange,
  onSubmit,
  disabled = false,
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

  const canSubmit = value.trim().length > 0 && !disabled;
  const expanded = focused || value.trim().length > 0;

  const submit = useCallback(() => {
    const next = value.trim();

    if (!next || disabled) {
      return;
    }

    onSubmit?.(next);

    if (!isControlled) {
      setUncontrolledValue('');
    }
  }, [disabled, isControlled, onSubmit, value]);

  return (
    <ChatProvider
      value={value}
      setValue={setValue}
      submit={submit}
      disabled={disabled}
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
