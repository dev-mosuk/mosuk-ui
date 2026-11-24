'use client';

import { Button } from '@/components/button';
import { ChatComposerIconProps } from '@/components/chat/.partials/components/composer-icon/component.interface';
import { useChat } from '@/components/chat/.partials/hooks/hook';
import styles from '@/components/chat/.partials/styles/component.module.css';
import classNames from 'classnames';
import React from 'react';

export function ChatComposerIcon<C = 'button'>({
  ...rest
}: ChatComposerIconProps<C>) {
  const { isDisabled } = useChat();

  return (
    <Button
      {...rest}
      as={(rest.as ?? 'button') as C}
      variant={rest.variant ?? Button.ENUMS.Variant.Ghost}
      press={rest.press ?? Button.ENUMS.Press.None}
      isDisabled={rest.isDisabled ?? isDisabled}
      className={classNames(
        'mosuk-chat-composer-icon',
        styles.icon,
        rest?.className,
      )}
    >
      {rest?.children}
    </Button>
  );
}
