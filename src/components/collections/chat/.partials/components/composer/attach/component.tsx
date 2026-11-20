'use client';

import { Icon } from '@/components/actions/icon';
import { ChatComposerAttachProps } from '@/components/collections/chat/.partials/components/composer/attach/component.interface';
import { useChat } from '@/components/collections/chat/.partials/hooks/hook';
import styles from '@/components/collections/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import { Plus } from 'lucide-react';
import React, { useId, useRef } from 'react';

export function ChatComposerAttach({
  inputProps,
  children,
  ...rest
}: ChatComposerAttachProps) {
  const { disabled } = useChat();
  const inputRef = useRef<HTMLInputElement>(null);
  const inputId = useId();
  const isDisabled = rest.disabled ?? disabled;

  return (
    <span className={styles.attachWrap}>
      <input
        {...inputProps}
        ref={inputRef}
        id={inputProps?.id ?? inputId}
        type='file'
        className={styles.attachInput}
        disabled={isDisabled || inputProps?.disabled}
        tabIndex={-1}
        aria-hidden
      />
      <Icon
        type='button'
        aria-label={rest['aria-label'] ?? 'Attach file'}
        {...rest}
        disabled={isDisabled}
        onClick={(event) => {
          rest?.onClick?.(event);

          if (!event.defaultPrevented) {
            inputRef.current?.click();
          }
        }}
        className={classNames(
          'mosuk-chat-composer-attach',
          styles.attach,
          rest?.className,
        )}
      >
        {children ?? <Plus strokeWidth={2} />}
      </Icon>
    </span>
  );
}
